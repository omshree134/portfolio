// @flow strict
import { personalData } from "@/utils/data/personal-data";
import SectionHeading from "../../helper/section-heading";

function AboutSection() {
  return (
    <section id="about" className="my-16 lg:my-24 relative">
      <SectionHeading cue="01" title="About" />
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-14 items-start">
        <p className="text-xl lg:text-2xl text-paper leading-relaxed font-light">
          <span className="text-cc font-[family-name:var(--font-mono)] text-base align-top mr-2">&gt;_</span>
          {personalData.description}
        </p>
        <dl className="border border-line bg-panel divide-y divide-line font-[family-name:var(--font-mono)] text-sm">
          {[
            ["DEGREE", "B.E. CSE (AI&ML)"],
            ["COLLEGE", "RNSIT, Bengaluru"],
            ["BATCH", "2023 — 2027"],
            ["FOCUS", "ML systems · backends · apps"],
            ["STATUS", "Open to SWE/ML internships"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-4 px-4 py-3">
              <dt className="text-[11px] tracking-[0.2em] text-muted">{k}</dt>
              <dd className="text-paper text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default AboutSection;
