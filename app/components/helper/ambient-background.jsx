"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-400);
  const pointerY = useMotionValue(-400);
  const x = useSpring(pointerX, { stiffness: 150, damping: 24, mass: .35 });
  const y = useSpring(pointerY, { stiffness: 150, damping: 24, mass: .35 });
  const [active, setActive] = useState(false);
  const idleTimer = useRef(null);
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 240]);
  const orbScale = useTransform(scrollYProgress, [0, .6, 1], [1, 1.12, .92]);
  const mask = useMotionTemplate`radial-gradient(190px circle at ${x}px ${y}px, black 0%, rgba(0,0,0,.9) 42%, transparent 74%)`;

  useEffect(() => {
    if (reduceMotion) return;
    const move = (event) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setActive(true);
      window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => setActive(false), 900);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); window.clearTimeout(idleTimer.current); };
  }, [pointerX, pointerY, reduceMotion]);

  return <>
    <div className="ambient-field" aria-hidden="true">
      <div className="ambient-grid" />
      <motion.div className="ambient-orb" style={{ y: orbY, scale: orbScale }} />
      <motion.div className="ambient-reveal" animate={{ opacity: active ? .9 : 0 }} transition={{ duration: .55 }} style={{ WebkitMaskImage: mask, maskImage: mask }}>
        <span className="ambient-code left-[7%] top-[23%]">signal / inference / action</span>
        <span className="ambient-code right-[8%] top-[55%]">human context → useful system</span>
        <span className="ambient-code bottom-[12%] left-[32%]">01  build · test · learn · repeat</span>
      </motion.div>
    </div>
    <motion.div aria-hidden="true" className="ambient-progress" style={{ scaleY: scrollYProgress }} />
  </>;
}
