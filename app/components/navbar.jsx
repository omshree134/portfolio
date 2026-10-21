// @flow strict
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] border-b border-white/5 shadow-sm" style={{ background: 'rgba(2,6,23,0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
      <div className="flex items-center justify-between py-3 px-6 md:px-12 mx-auto max-w-[92rem]">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-tight">
            Om Shree
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="group relative block px-2 py-2 text-sm text-muted transition-colors duration-300 hover:text-white" href="/#about">
              ABOUT
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link className="group relative block px-2 py-2 text-sm text-muted transition-colors duration-300 hover:text-white" href="/#experience">
              EXPERIENCE
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link className="group relative block px-2 py-2 text-sm text-muted transition-colors duration-300 hover:text-white" href="/#skills">
              SKILLS
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link className="group relative block px-2 py-2 text-sm text-muted transition-colors duration-300 hover:text-white" href="/#education">
              EDUCATION
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link className="group relative block px-2 py-2 text-sm text-muted transition-colors duration-300 hover:text-white" href="/#projects">
              PROJECTS
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;