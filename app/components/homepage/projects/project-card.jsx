// @flow strict
"use client";
import * as React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectCard({ project }) {
  return (
    <div 
      className="bg-[#1e293b] border border-white/5 relative rounded-xl w-full p-5 lg:p-6 flex flex-col justify-between h-full transition-all duration-300 hover:border-white/15 hover:-translate-y-1"
      style={{ 
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 32px rgba(59,130,246,0.1)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-2 pr-4">
            <h3 className="text-lg font-bold text-white leading-snug">
              {project.name}
            </h3>
            {project.badge && (
              <span className="w-fit px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-[11px] font-semibold uppercase tracking-wide">
                {project.badge}
              </span>
            )}
          </div>
          <div className="flex gap-2.5 text-muted flex-shrink-0">
            {project.code && (
              <Link href={project.code} target="_blank" className="hover:text-accent transition-colors">
                <BsGithub size={18} />
              </Link>
            )}
            {project.demo && (
              <Link href={project.demo} target="_blank" className="hover:text-accent transition-colors">
                <BiLinkExternal size={20} />
              </Link>
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tools.map((tag, i) => (
          <span 
            key={i} 
            className="px-2.5 py-1 text-xs font-medium bg-[#0f172a] text-accent/80 border border-accent/15 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
