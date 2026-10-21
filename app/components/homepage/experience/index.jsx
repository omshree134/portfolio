// @flow strict
import { experiences } from "@/utils/data/experience";
import SectionHeading from "../../helper/section-heading";

function Experience() {
  return (
    <section id="experience" className="my-16 lg:my-24">
      <SectionHeading cue="02" title="Experience & Achievements" />

      <ol className="relative border-l border-line ml-2 lg:ml-4 space-y-10 lg:space-y-14 pb-4">
        {experiences.map((experience, index) => (
          <li
            key={experience.id}
            className="relative pl-8 lg:pl-12 animate-fade-up"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-cc"></span>

            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2 lg:gap-8 mb-1.5">
              <h3 className="text-xl lg:text-2xl font-bold text-paper tracking-tight">
                {experience.title}
              </h3>
              <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] text-cc border border-cc/30 px-2.5 py-1 w-fit flex-shrink-0">
                {experience.duration}
              </span>
            </div>

            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.12em] text-muted uppercase">
              {experience.company}
            </p>

            {experience.points && (
              <ul className="mt-4 space-y-2.5">
                {experience.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="mt-[8px] h-px w-4 flex-shrink-0 bg-cc/70"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
