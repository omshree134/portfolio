// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { personalData } from "@/utils/data/personal-data";

function Footer() {
  return (
    <div className="relative border-t bg-background border-white/5 text-muted">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href={personalData.linkedIn} className="text-white hover:text-accent transition-colors">{personalData.name}</Link>
          </p>
          <div className="flex items-center gap-5 mt-4 md:mt-0">
            <Link
              target="_blank"
              href={personalData.github}
              className="flex items-center gap-2 uppercase hover:text-accent transition-colors"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href={personalData.github}
              className="flex items-center gap-2 uppercase hover:text-accent transition-colors"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;