// @flow strict
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectCard({ project, index }) {
  const cue = String(index + 1).padStart(2, '0');

  return (
    <article className="group relative border border-line bg-panel p-5 lg:p-7 flex flex-col h-full transition-colors duration-300 hover:border-cc/60">
      <div className="flex items-start justify-between gap-4 mb-5">
        <span className="font-[family-name:var(--font-mono)] text-4xl lg:text-5xl font-bold text-panel-2 group-hover:text-cc/25 transition-colors duration-300 select-none" aria-hidden="true">
          {cue}
        </span>
        <div className="flex flex-col items-end gap-2">
          {project.badge && (
            <span className="px-2.5 py-1 bg-cc text-ink font-[family-name:var(--font-mono)] text-[10px] font-bold tracking-[0.15em] uppercase">
              {project.badge}
            </span>
          )}
          <span className="flex gap-3 text-muted">
            {project.code && (
              <Link href={project.code} target="_blank" aria-label={`${project.name} source code`} className="hover:text-cc transition-colors">
                <BsGithub size={18} />
              </Link>
            )}
            {project.demo && (
              <Link href={project.demo} target="_blank" aria-label={`${project.name} live demo`} className="hover:text-cc transition-colors">
                <BiLinkExternal size={20} />
              </Link>
            )}
          </span>
        </div>
      </div>

      <h3 className="text-lg lg:text-xl font-bold text-paper leading-snug tracking-tight mb-1">
        {project.name}
      </h3>
      <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-cc/80 uppercase mb-3">
        {project.role}
      </p>

      <p className="text-sm text-muted leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tools.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] border border-line text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
