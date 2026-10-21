"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import { projectsData } from "@/utils/data/projects-data";
import { experiences } from "@/utils/data/experience";
import { skillsData } from "@/utils/data/skills";
import ContactForm from "./contact/contact-form";
import Reveal from "../helper/reveal";

function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, .65], [0, reduce ? 0 : -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, .58, .82], [1, 1, 0]);
  const portraitScale = useTransform(scrollYProgress, [0, .7], [.82, reduce ? .82 : 1.08]);
  const portraitY = useTransform(scrollYProgress, [0, .7], [70, reduce ? 70 : 0]);
  const portraitOpacity = useTransform(scrollYProgress, [0, .16, .72], [.3, 1, 1]);

  return <section ref={ref} className="cinema-hero relative h-[150vh]">
    <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 sm:px-8 lg:px-14">
      <motion.div aria-hidden="true" className="hero-halo" style={{ scale: portraitScale }} />
      <motion.div className="relative z-10 mx-auto w-full max-w-[88rem]" style={{ y: titleY, opacity: titleOpacity }}>
        <div className="mb-9 flex items-center justify-between text-[10px] font-medium uppercase tracking-[.24em] text-white/45"><span>Portfolio / 2026</span><span className="hidden sm:block">Bengaluru · 12.9716° N</span></div>
        <h1 className="cinema-title">Intelligence,<br /><span>made useful.</span></h1>
        <div className="mt-10 flex max-w-xl items-start gap-5 border-t border-white/15 pt-6"><span className="text-xs text-accent">01</span><p className="text-sm leading-6 text-white/55 sm:text-base">Om Shree Choudhary builds applied AI systems for accessibility, safety, and decisions that matter.</p></div>
      </motion.div>
      <motion.div className="hero-portrait pointer-events-none absolute bottom-0 right-[5vw] z-[5] hidden w-[29vw] min-w-[19rem] max-w-[29rem] lg:block" style={{ scale: portraitScale, y: portraitY, opacity: portraitOpacity }}><div className="relative aspect-[4/5]"><Image src={personalData.profile} alt={personalData.name} fill priority sizes="30vw" className="object-cover object-[center_30%] grayscale" /></div></motion.div>
      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center text-[9px] uppercase tracking-[.22em] text-white/35"><span className="mx-auto mb-3 block h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />Scroll to enter</div>
    </div>
  </section>;
}

function Manifesto() {
  return <section id="about" className="bg-[#f2f2ef] text-[#0a0a0a]"><div className="mx-auto max-w-[88rem] px-5 py-28 sm:px-8 lg:px-14 lg:py-44"><Reveal><p className="mb-12 text-[10px] font-semibold uppercase tracking-[.22em] text-black/45">The standard</p><h2 className="manifesto-title">The model is only<br className="hidden sm:block" /> the beginning.</h2></Reveal><div className="mt-20 grid gap-12 border-t border-black/15 pt-8 md:grid-cols-3"><Reveal><p className="text-5xl font-medium tracking-[-.06em]">92%</p><p className="mt-3 text-sm text-black/55">Validation accuracy on plastic waste classification.</p></Reveal><Reveal delay={.06}><p className="text-5xl font-medium tracking-[-.06em]">8.95</p><p className="mt-3 text-sm text-black/55">GPA in Computer Science — AI & ML.</p></Reveal><Reveal delay={.12}><p className="text-5xl font-medium tracking-[-.06em]">SIH ’25</p><p className="mt-3 text-sm text-black/55">National winner with Anuvad.</p></Reveal></div><Reveal className="mt-28 max-w-3xl md:ml-auto"><p className="text-2xl leading-[1.35] tracking-[-.03em] text-black/65 sm:text-4xl">I care about what happens <em className="font-medium not-italic text-black">after inference</em>: latency, reliability, accessibility, and whether the product actually helps someone.</p></Reveal></div></section>;
}

function SignalCore({ progress }) {
  const rotate = useTransform(progress, [0, 1], [0, 220]);
  const rotateBack = useTransform(progress, [0, 1], [140, -80]);
  const scale = useTransform(progress, [0, .45, 1], [.78, 1, .7]);
  const glow = useTransform(progress, [0, .5, 1], [.18, .5, .2]);
  return <motion.div className="signal-core" style={{ scale }}><motion.div className="signal-orbit signal-orbit-a" style={{ rotate }} /><motion.div className="signal-orbit signal-orbit-b" style={{ rotate: rotateBack }} /><motion.div className="signal-glow" style={{ opacity: glow }} /><div className="signal-screen"><div className="signal-wave">{Array.from({ length: 28 }).map((_, i) => <motion.i key={i} animate={{ height: [`${14 + (i % 5) * 7}%`, `${76 - (i % 4) * 9}%`, `${20 + (i % 3) * 11}%`] }} transition={{ duration: 1.25 + (i % 4) * .16, repeat: Infinity, ease: "easeInOut" }} />)}</div><span className="signal-caption">Speech → meaning → access</span></div></motion.div>;
}

function StoryChapter({ progress, range, eyebrow, title, copy, stat }) {
  const opacity = useTransform(progress, [range[0], range[0] + .06, range[1] - .06, range[1]], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[0] + .08, range[1]], [40, 0, -34]);
  return <motion.div className="absolute inset-0 flex flex-col justify-center" style={{ opacity, y }}><p className="text-[10px] font-medium uppercase tracking-[.24em] text-accent">{eyebrow}</p><h3 className="mt-5 text-5xl font-medium leading-[.94] tracking-[-.06em] sm:text-7xl">{title}</h3><p className="mt-7 max-w-md text-sm leading-6 text-white/50 sm:text-base">{copy}</p><p className="mt-10 border-t border-white/10 pt-5 text-xs text-white/35">{stat}</p></motion.div>;
}

function FeaturedStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return <section ref={ref} id="projects" className="relative h-[380vh] bg-[#050608] text-white"><div className="sticky top-0 h-screen overflow-hidden"><div className="absolute inset-x-5 top-24 z-20 flex items-center justify-between text-[9px] uppercase tracking-[.22em] text-white/35 sm:inset-x-10 lg:inset-x-14"><span>Featured system / Anuvad</span><span>01 — 03</span></div><div className="featured-grid mx-auto grid h-full max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-14"><div className="featured-visual relative grid place-items-center"><SignalCore progress={scrollYProgress} /></div><div className="featured-copy relative h-[70vh]"><StoryChapter progress={scrollYProgress} range={[0, .36]} eyebrow="01 / Listen" title={<>Hears the room.<br />In real time.</>} copy="A low-latency speech pipeline turns live conversation into readable captions while the moment is still happening." stat="Real-time ASR · Desktop + Android · System architecture" /><StoryChapter progress={scrollYProgress} range={[.31, .69]} eyebrow="02 / Understand" title={<>Language<br />without walls.</>} copy="Captioning and translation work together so communication can cross both hearing and language barriers." stat="Speech-to-text · Translation · Accessibility" /><StoryChapter progress={scrollYProgress} range={[.64, 1]} eyebrow="03 / Include" title={<>Designed around<br />the person.</>} copy="Anuvad was built for Deaf and Hard-of-Hearing users—technology measured by access, not spectacle." stat="Smart India Hackathon 2025 · National winner" /></div></div><motion.div className="absolute bottom-0 left-0 h-[2px] bg-accent" style={{ scaleX: scrollYProgress, transformOrigin: "left" }} /></div></section>;
}

function ProjectVisual({ index }) {
  if (index === 1) return <div className="visual-radar"><i /><i /><i /><b /></div>;
  if (index === 2) return <div className="visual-network">{Array.from({ length: 8 }).map((_, i) => <i key={i} style={{ "--i": i }} />)}<b>VITA</b></div>;
  if (index === 3) return <div className="visual-heatmap">{Array.from({ length: 42 }).map((_, i) => <i key={i} style={{ opacity: .16 + ((i * 7) % 9) / 12 }} />)}</div>;
  if (index === 4) return <div className="visual-classify"><b>92%</b><span>validation accuracy</span>{[72, 89, 64, 92, 81].map((value, i) => <i key={i} style={{ height: `${value}%` }} />)}</div>;
  return <div className="visual-chat"><span>intent</span><span>context</span><span>response</span><b>87%</b></div>;
}

function ProjectFilm() {
  const rest = projectsData.slice(1);
  return <section className="bg-[#050608] pb-24 text-white lg:pb-40"><div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-14"><Reveal className="flex items-end justify-between border-b border-white/10 pb-8"><div><p className="text-[10px] uppercase tracking-[.22em] text-white/35">The wider system</p><h2 className="mt-4 text-5xl font-medium tracking-[-.06em] sm:text-7xl">Selected work.</h2></div><span className="hidden text-xs text-white/35 md:block">05 projects / scroll</span></Reveal><div className="mt-10 space-y-5">{rest.map((project, i) => <Reveal key={project.id} className="project-film group relative min-h-[76vh] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0a0d12] p-7 sm:p-10 lg:grid lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-14 lg:p-14"><div className="relative z-10"><span className="text-[10px] uppercase tracking-[.22em] text-white/35">0{i + 2} / {project.role}</span><h3 className="mt-8 max-w-xl text-4xl font-medium leading-[.98] tracking-[-.055em] sm:text-6xl">{project.name}</h3><p className="mt-7 max-w-xl text-sm leading-6 text-white/48">{project.description}</p><div className="mt-8 flex flex-wrap gap-2">{project.tools.slice(0, 4).map(tool => <span key={tool} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/45">{tool}</span>)}</div><Link href={project.code} target="_blank" className="mt-10 inline-flex items-center gap-3 text-sm">Explore the build <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition group-hover:bg-white group-hover:text-black">↗</span></Link></div><div className="project-visual relative mt-14 min-h-72 lg:mt-0"><ProjectVisual index={i + 1} /></div></Reveal>)}</div></div></section>;
}

function Specifications() {
  return <section id="experience" className="bg-[#f2f2ef] text-black"><div className="mx-auto max-w-[88rem] px-5 py-28 sm:px-8 lg:px-14 lg:py-44"><Reveal className="grid gap-10 md:grid-cols-2 md:items-end"><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">Under the surface</p><h2 className="mt-5 text-6xl font-medium tracking-[-.07em] sm:text-8xl">The spec.</h2></div><p className="max-w-md text-sm leading-6 text-black/55 md:justify-self-end">The tools change. The operating principles don’t: understand the system, reduce uncertainty, and make the experience feel inevitable.</p></Reveal><div className="mt-20 grid border-t border-black/15 md:grid-cols-3">{[["Intelligence", "TensorFlow · PyTorch · OpenCV · NLP"], ["Engineering", "Python · FastAPI · Java · C++"], ["Infrastructure", "Docker · MongoDB · Firebase · Git"]].map(([title, list], i) => <Reveal key={title} delay={i * .06} className="border-b border-black/15 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="text-xs text-black/35">0{i + 1}</span><h3 className="mt-14 text-2xl font-medium tracking-[-.04em]">{title}</h3><p className="mt-4 text-sm leading-6 text-black/50">{list}</p></Reveal>)}</div><div className="mt-28 grid gap-12 lg:grid-cols-[.45fr_1fr]"><Reveal><h3 className="text-3xl font-medium tracking-[-.04em]">Proof over promise.</h3><p className="mt-4 text-sm leading-6 text-black/50">Work, research, and recognition.</p></Reveal><div>{experiences.map((item, i) => <Reveal key={item.id} className="grid gap-3 border-t border-black/15 py-7 sm:grid-cols-[3rem_1fr_auto]"><span className="text-xs text-black/35">0{i + 1}</span><div><h4 className="font-medium">{item.title}</h4><p className="mt-1 text-sm text-black/45">{item.company}</p></div><span className="text-[10px] uppercase tracking-[.14em] text-black/40">{item.duration.replace(/[()]/g, "")}</span></Reveal>)}</div></div><div className="mt-20 flex flex-wrap gap-2">{skillsData.map(skill => <span key={skill} className="rounded-full border border-black/15 px-4 py-2 text-xs text-black/55">{skill}</span>)}</div></div></section>;
}

function Contact() {
  return <section id="contact" className="relative overflow-hidden bg-[#050608] text-white"><div className="contact-halo" /><div className="relative mx-auto max-w-[88rem] px-5 py-28 sm:px-8 lg:px-14 lg:py-44"><Reveal><p className="text-center text-[10px] uppercase tracking-[.24em] text-white/35">Next chapter</p><h2 className="mx-auto mt-7 max-w-5xl text-center text-6xl font-medium leading-[.92] tracking-[-.075em] sm:text-8xl lg:text-[8.5rem]">Let’s build what’s next.</h2><p className="mx-auto mt-8 max-w-xl text-center text-sm leading-6 text-white/48">Open to SWE and ML internships where ambitious engineering meets a meaningful problem.</p></Reveal><div className="mx-auto mt-20 max-w-3xl"><Reveal><ContactForm /></Reveal></div><div className="mt-16 flex justify-center gap-3"><Link href={personalData.github} target="_blank" className="rounded-full border border-white/15 px-5 py-2.5 text-xs hover:bg-white hover:text-black">GitHub ↗</Link><Link href={personalData.linkedIn} target="_blank" className="rounded-full border border-white/15 px-5 py-2.5 text-xs hover:bg-white hover:text-black">LinkedIn ↗</Link></div></div></section>;
}

export default function CinematicHome() { return <div className="cinematic-home"><Hero /><Manifesto /><FeaturedStory /><ProjectFilm /><Specifications /><Contact /></div>; }
