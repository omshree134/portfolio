// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { personalData } from "@/utils/data/personal-data";

const repoUrl = "https://github.com/omshree134/portfolio";

function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink text-muted">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em]">
            [END&nbsp;OF&nbsp;TRANSMISSION]&nbsp;&nbsp;©&nbsp;
            <Link target="_blank" href={personalData.linkedIn} className="text-paper hover:text-cc transition-colors">
              {personalData.name}
            </Link>
          </p>
          <div className="flex items-center gap-5 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em]">
            <Link
              target="_blank"
              href={repoUrl}
              className="flex items-center gap-2 uppercase hover:text-cc transition-colors"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href={`${repoUrl}/fork`}
              className="flex items-center gap-2 uppercase hover:text-cc transition-colors"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
