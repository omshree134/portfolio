"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";

export default function HeroSection() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const copyY = useTransform(scrollYProgress, [0, .16], [0, reduce ? 0 : -64]);
  const imageY = useTransform(scrollYProgress, [0, .16], [0, reduce ? 0 : 42]);
  const enter = (delay = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: .75, delay, ease: [0.22, 1, 0.36, 1] } });

  return <section className="relative mx-auto flex min-h-screen max-w-[84rem] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 md:pt-36 lg:px-12">
    <div className="noise" />
    <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_21rem] lg:gap-20">
      <motion.div className="relative z-10" style={{ y: copyY }}>
        <motion.div {...enter(0)} className="mb-8 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[.2em] text-muted"><span className="rounded-full border border-white/12 px-3 py-2 text-white/85">AI / ML Engineer</span><span>Bengaluru, India</span></motion.div>
        <motion.h1 {...enter(.08)} className="display-type max-w-[56rem]">Building thoughtful<br />systems with<br /><span className="text-accent">intelligence.</span></motion.h1>
        <motion.div {...enter(.16)} className="mt-10 grid max-w-3xl gap-7 border-t border-white/12 pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-base leading-7 text-muted">I’m Om Shree—an AI/ML engineer who turns complex problems into useful software, from accessible speech systems to resilient real-world platforms.</p>
          <Link href="#projects" className="magnetic-link group inline-flex items-center gap-3 text-sm font-medium">Selected work <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-black">↓</span></Link>
        </motion.div>
      </motion.div>

      <motion.div {...enter(.24)} className="relative mx-auto w-full max-w-[20rem]" style={{ y: imageY }}>
        <div className="absolute -inset-5 rounded-[1.8rem] border border-white/[.06]" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#0e131b] p-2 shadow-[0_30px_90px_rgba(0,0,0,.32)]">
          <Image src={personalData.profile} alt={personalData.name} fill priority sizes="(max-width: 1024px) 80vw, 320px" className="!relative h-full w-full rounded-[1rem] object-cover grayscale-[35%] contrast-[1.03]" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-[#080b10]/80 px-4 py-3 backdrop-blur-xl"><div className="flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-muted"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available for internships</div></div>
        </div>
        <div className="absolute -left-7 top-12 hidden rounded-lg border border-white/10 bg-[#0a0e14]/80 px-3 py-2 text-[10px] uppercase tracking-[.17em] text-muted backdrop-blur md:block">SIH 2025 · National winner</div>
      </motion.div>
    </div>
    <motion.div {...enter(.35)} className="absolute bottom-7 left-5 hidden items-center gap-3 text-[10px] uppercase tracking-[.2em] text-muted md:flex"><span className="h-px w-9 bg-accent" /> Move slowly. There’s more beneath the surface.</motion.div>
  </section>;
}
