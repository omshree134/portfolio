// @flow strict
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

const links = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#education", label: "EDUCATION" },
  { href: "/#contact", label: "CONTACT" },
];

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group relative block px-3 py-2 font-[family-name:var(--font-mono)] text-xs tracking-[0.18em] text-muted transition-colors duration-200 hover:text-cc"
    >
      {label}
      <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-cc transition-transform duration-200 group-hover:scale-x-100"></span>
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="relative flex items-center justify-between py-3 px-6 md:px-12 mx-auto max-w-[92rem]">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <span className="live-dot" aria-hidden="true"></span>
          <span className="font-[family-name:var(--font-mono)] text-sm font-bold tracking-[0.22em] text-paper">
            OM&nbsp;SHREE
          </span>
          <span className="hidden sm:inline font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] text-cc border border-cc/40 px-1.5 py-0.5">
            CC
          </span>
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex md:items-center md:space-x-1">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink href={l.href} label={l.label} />
            </li>
          ))}
          {personalData.resume && (
            <li>
              <Link
                href={personalData.resume}
                target="_blank"
                className="ml-2 block px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.18em] text-ink bg-cc hover:bg-paper transition-colors duration-200"
              >
                RESUME
              </Link>
            </li>
          )}
        </ul>

        {/* mobile menu: native <details> so it works with or without JS */}
        <details className="md:hidden group">
          <summary
            aria-label="Toggle navigation menu"
            className="list-none cursor-pointer p-2 -m-2 text-paper [&::-webkit-details-marker]:hidden"
          >
            <span className="block w-6 h-0.5 bg-paper mb-1.5 transition-transform group-open:rotate-45 group-open:translate-y-2"></span>
            <span className="block w-6 h-0.5 bg-paper mb-1.5 group-open:opacity-0"></span>
            <span className="block w-6 h-0.5 bg-paper transition-transform group-open:-rotate-45 group-open:-translate-y-2"></span>
          </summary>
          <ul className="absolute left-0 right-0 top-full border-b border-line bg-ink px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink href={l.href} label={l.label} />
              </li>
            ))}
            {personalData.resume && (
              <li className="pt-2">
                <Link
                  href={personalData.resume}
                  target="_blank"
                  className="inline-block px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.18em] text-ink bg-cc"
                >
                  RESUME
                </Link>
              </li>
            )}
          </ul>
        </details>
      </div>
    </nav>
  );
}

export default Navbar;
