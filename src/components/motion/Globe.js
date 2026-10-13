"use client";

import { useEffect, useRef } from "react";
import landDots from "@/data/globe-dots.json";

/*
 * Interactive dotted globe drawn on <canvas> with a small hand-written orthographic projection.
 * - Sweeps between Europe and Japan on its own; drag to spin (with inertia).
 * - Animated great-circle arcs fly from each origin to the Japan hub, with a glowing head.
 * - City markers pulse; labels show when a city faces the viewer.
 * Pauses when off-screen; renders a single static frame for reduced-motion users.
 */

const RAD = Math.PI / 180;

export const HUB = { name: "Japan", label: "Japan · HQ", lon: 139.7, lat: 35.53 };
export const ROUTES = [
  { name: "India", lon: 77.59, lat: 12.97, kind: "talent" },
  { name: "USA", lon: -74.0, lat: 40.71, kind: "business" },
  { name: "UK", lon: -0.12, lat: 51.5, kind: "business" },
  { name: "Germany", lon: 13.4, lat: 52.52, kind: "business" },
];
export const ROUTE_COLORS = { talent: [240, 126, 26], business: [190, 200, 245] };

const toVec = (lon, lat) => {
  const l = lon * RAD;
  const p = lat * RAD;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
};

// Points along the great circle a->b, lifted above the surface into an arc.
function buildArc(a, b, steps = 90) {
  const va = toVec(a.lon, a.lat);
  const vb = toVec(b.lon, b.lat);
  const dot = Math.min(1, Math.max(-1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));
  const omega = Math.acos(dot);
  const sinO = Math.sin(omega);
  const lift = 0.08 + 0.22 * (omega / Math.PI);
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const s1 = Math.sin((1 - t) * omega) / sinO;
    const s2 = Math.sin(t * omega) / sinO;
    const h = 1 + Math.sin(Math.PI * t) * lift;
    pts.push([(va[0] * s1 + vb[0] * s2) * h, (va[1] * s1 + vb[1] * s2) * h, (va[2] * s1 + vb[2] * s2) * h]);
  }
  return pts;
}

export default function Globe({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const font = getComputedStyle(canvas).fontFamily || "sans-serif";

    const dots = landDots.map(([lon, lat]) => toVec(lon, lat));
    const hubVec = toVec(HUB.lon, HUB.lat);
    const routes = ROUTES.map((r, i) => ({
      ...r,
      vec: toVec(r.lon, r.lat),
      arc: buildArc(r, HUB),
      offset: i * 0.25,
    }));

    // view state — the globe sweeps between Europe (lon ~15) and Japan (lon ~150)
    // so every route into Japan stays in view; dragging spins it freely.
    const SWEEP_CENTER = 82;
    const SWEEP_RANGE = 67;
    const SWEEP_SPEED = 0.16;
    const BASE_PITCH = 18 * RAD; // tilt north towards the viewer
    let sweep = Math.asin((112 - SWEEP_CENTER) / SWEEP_RANGE) / SWEEP_SPEED;
    let yaw = -112 * RAD; // start centred between India and Japan
    let pitch = BASE_PITCH;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let size = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let last = performance.now();
    let time = 0;

    const project = (v, out) => {
      const cy = Math.cos(yaw);
      const sy = Math.sin(yaw);
      const x1 = v[0] * cy + v[2] * sy;
      const z1 = v[2] * cy - v[0] * sy;
      const cp = Math.cos(pitch);
      const sp = Math.sin(pitch);
      out[0] = x1;
      out[1] = v[1] * cp - z1 * sp;
      out[2] = v[1] * sp + z1 * cp;
      return out;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = rect.width;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.width * dpr);
      draw();
    };

    const p = [0, 0, 0];

    function draw() {
      if (!size) return;
      const W = size;
      const R = W * 0.4;
      const cx = W / 2;
      const cyc = W / 2;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, W);

      // atmosphere glow
      const atm = ctx.createRadialGradient(cx, cyc, R * 0.92, cx, cyc, R * 1.22);
      atm.addColorStop(0, "rgba(117,132,204,0.45)");
      atm.addColorStop(1, "rgba(117,132,204,0)");
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(cx, cyc, R * 1.22, 0, Math.PI * 2);
      ctx.fill();

      // sphere
      const sph = ctx.createRadialGradient(cx - R * 0.35, cyc - R * 0.4, R * 0.1, cx, cyc, R);
      sph.addColorStop(0, "#3e4f9e");
      sph.addColorStop(0.55, "#1a276c");
      sph.addColorStop(1, "#0b1240");
      ctx.fillStyle = sph;
      ctx.beginPath();
      ctx.arc(cx, cyc, R, 0, Math.PI * 2);
      ctx.fill();

      // land dots
      for (let i = 0; i < dots.length; i++) {
        project(dots[i], p);
        if (p[2] <= 0) continue;
        const a = 0.18 + 0.82 * p[2];
        const s = (0.9 + 0.9 * p[2]) * (W / 520);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect(cx + p[0] * R - s / 2, cyc - p[1] * R - s / 2, s, s);
      }

      // rim light
      const rim = ctx.createRadialGradient(cx, cyc, R * 0.75, cx, cyc, R);
      rim.addColorStop(0, "rgba(255,255,255,0)");
      rim.addColorStop(1, "rgba(190,200,245,0.18)");
      ctx.fillStyle = rim;
      ctx.beginPath();
      ctx.arc(cx, cyc, R, 0, Math.PI * 2);
      ctx.fill();

      // arcs
      const PERIOD = 4.2;
      for (const r of routes) {
        const [cr, cg, cb] = ROUTE_COLORS[r.kind];
        const u = reduce ? 0.6 : (((time / PERIOD + r.offset) % 1) + 1) % 1;
        const grow = Math.min(u / 0.5, 1); // 0..0.5 draws the line
        const fade = u > 0.75 ? 1 - (u - 0.75) / 0.25 : 1;
        const n = r.arc.length - 1;
        const head = Math.max(0, Math.min(n, Math.floor(grow * n)));

        // faint full route
        drawPath(r.arc, 0, n, `rgba(${cr},${cg},${cb},0.16)`, 1.2, R, cx, cyc);
        // animated line
        drawPath(r.arc, 0, head, `rgba(${cr},${cg},${cb},${0.85 * fade})`, 2, R, cx, cyc);

        // glowing head while travelling
        if (grow < 1 && !reduce) {
          project(r.arc[head], p);
          if (isVisible(p)) {
            const hx = cx + p[0] * R;
            const hy = cyc - p[1] * R;
            const g = ctx.createRadialGradient(hx, hy, 0, hx, hy, 10);
            g.addColorStop(0, `rgba(${cr},${cg},${cb},1)`);
            g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(hx, hy, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(hx, hy, 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        // origin marker
        marker(r.vec, [cr, cg, cb], r.name, time + r.offset * 2, R, cx, cyc, false);
      }

      // hub marker on top
      marker(hubVec, [255, 255, 255], HUB.label, time, R, cx, cyc, true);
    }

    const isVisible = (q) => q[2] > 0 || q[0] * q[0] + q[1] * q[1] > 1;

    function drawPath(pts, from, to, color, width, R, cx, cyc) {
      if (to - from < 1) return;
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.beginPath();
      let pen = false;
      for (let i = from; i <= to; i++) {
        project(pts[i], p);
        if (!isVisible(p)) {
          pen = false;
          continue;
        }
        const x = cx + p[0] * R;
        const y = cyc - p[1] * R;
        if (pen) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
        pen = true;
      }
      ctx.stroke();
    }

    function marker(vec, [cr, cg, cb], label, t, R, cx, cyc, hub) {
      project(vec, p);
      if (p[2] <= 0.02) return;
      const x = cx + p[0] * R;
      const y = cyc - p[1] * R;
      const depth = Math.min(1, p[2] * 1.6);

      // pulse rings
      if (!reduce) {
        for (let k = 0; k < 2; k++) {
          const ph = ((t * 0.6 + k * 0.5) % 1 + 1) % 1;
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${(1 - ph) * 0.7 * depth})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(x, y, (hub ? 5 : 3) + ph * (hub ? 22 : 14), 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(${cr},${cg},${cb},${depth})`;
      ctx.beginPath();
      ctx.arc(x, y, hub ? 5 : 3.5, 0, Math.PI * 2);
      ctx.fill();
      if (hub) {
        ctx.fillStyle = "#f07e1a";
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // label pill
      if (p[2] > 0.25) {
        ctx.font = `700 ${hub ? 12 : 11}px ${font}`;
        const tw = ctx.measureText(label).width;
        const bx = x + 10;
        const by = y - 22;
        const bw = tw + 16;
        const bh = 20;
        ctx.globalAlpha = Math.min(1, (p[2] - 0.25) * 3);
        ctx.fillStyle = hub ? "#ffffff" : "rgba(11,18,64,0.85)";
        roundRect(bx, by, bw, bh, 10);
        ctx.fill();
        ctx.fillStyle = hub ? "#1a276c" : "#ffffff";
        ctx.textBaseline = "middle";
        ctx.fillText(label, bx + 8, by + bh / 2 + 0.5);
        ctx.globalAlpha = 1;
      }
    }

    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    const loop = (now) => {
      const dt = Math.max(0, Math.min((now - last) / 1000, 0.05));
      last = now;
      time += dt;
      if (!dragging) {
        // inertia from a drag, then ease back into the guided sweep
        velocity *= 0.94;
        yaw += velocity * dt;
        if (Math.abs(velocity) < 0.05) {
          sweep += dt;
          const target = -(SWEEP_CENTER + SWEEP_RANGE * Math.sin(sweep * SWEEP_SPEED)) * RAD;
          const diff = Math.atan2(Math.sin(target - yaw), Math.cos(target - yaw));
          yaw += diff * Math.min(1, dt * 1.5);
          pitch += (BASE_PITCH - pitch) * Math.min(1, dt * 0.8);
        }
      }
      draw();
      raf = visible ? requestAnimationFrame(loop) : 0;
    };

    // dragging
    const onDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velocity = 0;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      yaw += dx * 0.006;
      pitch = Math.max(-0.3, Math.min(0.9, pitch + dy * 0.004));
      velocity = dx * 0.25;
      if (reduce) draw();
    };
    const onUp = (e) => {
      dragging = false;
      canvas.style.cursor = "grab";
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && !reduce) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    });
    io.observe(canvas);

    if (!reduce) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`aspect-square w-full cursor-grab touch-pan-y select-none ${className}`}
      role="img"
      aria-label="Rotating globe showing Akira Consulting's network: bilingual talent from India and market-entry clients from the USA, UK and Germany connecting to Japan"
    />
  );
}
