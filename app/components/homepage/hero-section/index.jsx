// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";

const stats = [
  "SIH 2025 NATIONAL WINNER",
  "GPA 8.95",
  "BENGALURU, IN",
];

const WAVE_COUNT = 56;

function Waveform() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-[3px] h-7 overflow-hidden"
    >
      {Array.from({ length: WAVE_COUNT }).map((_, i) => (
        <span
          key={i}
          className="wave-bar h-6"
          style={{
            animationDelay: `${-(i * 0.09).toFixed(2)}s`,
            animationDuration: `${(0.9 + 0.5 * Math.abs(Math.sin(i * 1.7))).toFixed(2)}s`,
            opacity: 0.35 + 0.65 * Math.abs(Math.sin(i * 0.9)),
          }}
        ></span>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center min-h-[88vh] py-10 lg:py-16">
      {/* feed header */}
      <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[11px] tracking-[0.25em] text-muted mb-10 lg:mb-14">
        <span className="flex items-center gap-2 text-paper">
          <span className="live-dot" aria-hidden="true"></span>
          LIVE&nbsp;<span className="text-muted">// PORTFOLIO FEED</span>
        </span>
        <span className="hidden sm:block">RNSIT&nbsp;·&nbsp;BENGALURU</span>
      </div>

      <div className="grid grid-cols-1 items-center lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 gap-y-12 w-full">
        <div className="flex flex-col items-start animate-fade-up">
          {/* caption bar: the site demonstrates his flagship work */}
          <div className="caption-card px-4 py-2.5 mb-7 max-w-full">
            <p className="font-[family-name:var(--font-mono)] text-sm sm:text-base text-cc">
              <span className="caption-typed">building ai that listens.</span>
            </p>
          </div>

          <h1 className="font-bold tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] mb-5">
            OM SHREE
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px #f5f4ee" }}
            >
              CHOUDHARY
            </span>
          </h1>

          <h2 className="font-[family-name:var(--font-mono)] text-xs sm:text-sm tracking-[0.2em] text-cc mb-5 uppercase">
            {personalData.designation}
          </h2>

          <p className="text-base text-muted max-w-lg mb-7 leading-relaxed">
            {personalData.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {stats.map((stat) => (
              <span
                key={stat}
                className="px-3 py-1 border border-line font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-muted"
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
                className="px-5 py-2.5 bg-cc text-ink text-sm font-bold tracking-wide hover:bg-paper transition-colors duration-200 flex items-center gap-2"
              >
                <span>Resume</span>
                <MdDownload size={16} />
              </Link>
            )}

            <Link
              href="/#projects"
              className="px-5 py-2.5 border border-line text-paper text-sm font-medium tracking-wide hover:border-cc hover:text-cc transition-colors duration-200 flex items-center gap-2"
            >
              <span>Projects</span>
              <RiProjectorFill size={16} />
            </Link>

            <Link
              href={personalData.github}
              target="_blank"
              aria-label="GitHub profile"
              className="p-2.5 border border-line text-muted hover:text-cc hover:border-cc transition-colors duration-200"
            >
              <BsGithub size={18} />
            </Link>

            <Link
              href={personalData.linkedIn}
              target="_blank"
              aria-label="LinkedIn profile"
              className="p-2.5 border border-line text-muted hover:text-cc hover:border-cc transition-colors duration-200"
            >
              <BsLinkedin size={18} />
            </Link>
          </div>
        </div>

        {/* broadcast frame */}
        <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <figure className="relative w-full max-w-[380px]">
            <span className="frame-corner tl" aria-hidden="true"></span>
            <span className="frame-corner tr" aria-hidden="true"></span>
            <span className="frame-corner bl" aria-hidden="true"></span>
            <span className="frame-corner br" aria-hidden="true"></span>

            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-ink/80 px-2 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-paper">
              <span className="live-dot" aria-hidden="true"></span> LIVE
            </div>

            <div className="border border-line bg-panel overflow-hidden">
              <img
                src={`${personalData.profile}?v=3`}
                alt={personalData.name}
                className="w-full aspect-square object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              {/* subtitle strip: the person, captioned */}
              <figcaption className="bg-black px-4 py-2.5 text-center">
                <span className="font-[family-name:var(--font-mono)] text-xs sm:text-sm text-cc tracking-wide">
                  om shree choudhary — cse (ai&amp;ml)
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

      <div className="mt-12 lg:mt-16 border-t border-line pt-5 flex items-center gap-4">
        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] text-muted flex-shrink-0">
          SIGNAL&nbsp;///
        </span>
        <Waveform />
      </div>
    </section>
  );
}

export default HeroSection;
