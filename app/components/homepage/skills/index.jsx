// @flow strict
import { skillsData } from "@/utils/data/skills";
import SectionHeading from "../../helper/section-heading";

function Chip({ skill, hidden }) {
  return (
    <span
      aria-hidden={hidden || undefined}
      className="px-4 py-2 border border-line bg-panel font-[family-name:var(--font-mono)] text-xs tracking-[0.12em] text-paper whitespace-nowrap hover:border-cc hover:text-cc transition-colors cursor-default"
    >
      {skill}
    </span>
  );
}

function Skills() {
  return (
    <section id="skills" className="my-16 lg:my-24">
      <SectionHeading
        cue="03"
        title="Signal Chain"
        sub="Languages, frameworks, and tools I use to build ML systems and backend infrastructure."
      />

      {/* pure-CSS marquee; without animation the full row stays visible */}
      <div className="marquee border-y border-line py-4 -mx-6 sm:-mx-12 px-6 sm:px-12">
        <div className="marquee-track">
          {skillsData.map((skill) => (
            <Chip key={skill} skill={skill} />
          ))}
          {skillsData.map((skill) => (
            <Chip key={`${skill}-dup`} skill={skill} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
