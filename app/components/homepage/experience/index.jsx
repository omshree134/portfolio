// @flow strict
"use client";
import { experiences } from "@/utils/data/experience";

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-8 lg:my-16 px-6 md:px-12 mx-auto max-w-[92rem]">
      <div className="flex items-center justify-start mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Experience & Achievements
        </h2>
      </div>

      <div className="relative border-l border-white/10 ml-3 lg:ml-6 space-y-8 lg:space-y-12 pb-8">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative pl-8 lg:pl-12 animate-slide-in-left"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-8 mb-2">
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                {experience.title}
              </h3>
              <span className="text-accent font-medium bg-accent/10 px-3 py-1 rounded-full text-sm w-fit">
                {experience.duration}
              </span>
            </div>
            
            <p className="text-muted text-base font-medium">
              {experience.company}
            </p>

            {experience.points && (
              <ul className="mt-3 space-y-2">
                {experience.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
