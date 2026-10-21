import Reveal from "../../helper/reveal";

const facts = [["01", "National winner", "Smart India Hackathon 2025"], ["02", "8.95 GPA", "CSE — Artificial Intelligence & ML"], ["03", "6 projects", "Across accessibility, safety and health"]];

export default function AboutSection() {
  return <section id="about" className="mx-auto max-w-[90rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
    <Reveal><span className="section-kicker">A little context</span></Reveal>
    <div className="mt-10 grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
      <Reveal delay={.08}><p className="max-w-sm text-sm leading-7 text-muted">I care about technology that earns its place in people’s lives. My work sits where applied AI, dependable backend engineering, and thoughtful product decisions meet.</p><div className="mt-10 flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-full border border-accent/40 text-2xl text-accent">⌁</span><p className="text-sm"><span className="block font-semibold text-white">Curious by default.</span><span className="text-muted">Practical by design.</span></p></div></Reveal>
      <Reveal delay={.14}><h2 className="text-4xl font-semibold leading-[1.06] tracking-[-.055em] sm:text-6xl lg:text-7xl">Not just models and APIs. I build <span className="text-muted">clear, useful experiences</span> around hard problems.</h2></Reveal>
    </div>
    <div className="mt-20 grid border-y border-white/10 md:grid-cols-3">{facts.map(([no, title, text], i) => <Reveal key={no} delay={i * .07} className="border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8"><span className="text-xs text-accent">/{no}</span><p className="mt-7 text-2xl font-semibold tracking-tight">{title}</p><p className="mt-2 text-sm text-muted">{text}</p></Reveal>)}</div>
  </section>;
}
