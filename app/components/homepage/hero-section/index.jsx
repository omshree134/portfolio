// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";

const stats = [
  "SIH 2025 National Winner",
  "GPA 8.95",
  "Bengaluru, India",
];

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-8 lg:py-16">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8 w-full">
        <div className="order-1 flex flex-col items-start justify-center animate-fade-up">
          <h1 className="text-4xl font-bold leading-tight text-white md:font-extrabold lg:text-[3.25rem] lg:leading-[1.15] mb-3">
            {personalData.name}
          </h1>
          <h2 className="text-lg font-medium text-accent mb-5">
            {personalData.designation}
          </h2>
          <p className="text-base text-muted max-w-md mb-6 leading-relaxed">
            {personalData.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            {stats.map((stat) => (
              <span
                key={stat}
                className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-medium"
              >
                {stat}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {personalData.resume && (
              <Link 
                href={personalData.resume} 
                target="_blank"
                className="px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-all duration-200 flex items-center gap-2"
              >
                <span>Resume</span>
                <MdDownload size={16} />
              </Link>
            )}
            
            <Link 
              href="/#projects" 
              className="px-5 py-2.5 rounded-lg bg-[#0f172a] text-white text-sm font-medium border border-white/10 hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
            >
              <span>Projects</span>
              <RiProjectorFill size={16} />
            </Link>

            <Link
              href={personalData.github}
              target='_blank'
              className="p-2.5 rounded-lg bg-[#0f172a] text-muted border border-white/10 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <BsGithub size={18} />
            </Link>

            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="p-2.5 rounded-lg bg-[#0f172a] text-muted border border-white/10 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <BsLinkedin size={18} />
            </Link>
          </div>
        </div>
        
        <div className="order-2 flex justify-center lg:justify-end animate-fade-in-scale">
          <div className="bg-[#1e293b] border border-white/8 rounded-xl p-5 w-full max-w-[440px] shadow-lg">
            <h3 className="text-base font-semibold text-white mb-4 pb-3 border-b border-white/8">
              Current Focus
            </h3>
            
            <div className="space-y-2.5 mb-5">
              {[
                "Machine Learning & TensorFlow",
                "FastAPI & Python Backend",
                "Flutter & Cross-platform Apps",
                "System Design",
                "Competitive Programming"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/70"></div>
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/8 pt-4 flex items-center justify-between">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">Status</span>
              <span className="text-xs font-medium text-accent/80 flex items-center gap-1.5">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent/60"></span>
                Available for Internships
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
