// @flow strict
import { educations } from "@/utils/data/educations";
import SectionHeading from "../../helper/section-heading";

function Education() {
  return (
    <section id="education" className="my-16 lg:my-24">
      <SectionHeading cue="05" title="Education" />

      <div className="grid grid-cols-1 gap-5 max-w-3xl">
        {educations.map((education) => (
          <div
            key={education.id}
            className="border border-line bg-panel p-5 lg:p-7 transition-colors duration-300 hover:border-cc/60"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl lg:text-2xl font-bold text-paper tracking-tight">
                {education.title}
              </h3>
              <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] text-cc border border-cc/30 px-2.5 py-1 w-fit flex-shrink-0">
                {education.duration}
              </span>
            </div>

            <p className="text-sm text-muted mb-3">
              {education.institution}
            </p>

            {education.gpa && (
              <p className="font-[family-name:var(--font-mono)] text-sm font-bold text-paper">
                <span className="text-cc mr-2" aria-hidden="true">■</span>{education.gpa}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
