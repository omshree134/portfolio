"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function Reveal({ children, className = "", delay = 0, y = 22 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y, filter: "blur(5px)" }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.12, margin: "-8% 0px -8% 0px" }} transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
