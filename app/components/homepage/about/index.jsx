// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-8 lg:my-16 relative px-6 md:px-12 mx-auto max-w-[92rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-muted text-sm lg:text-base leading-relaxed">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-[280px] h-[280px] rounded-xl overflow-hidden border border-white/10">
            <img
              src={`${personalData.profile}?v=3`}
              alt={personalData.name}
              className="transition-all duration-700 hover:scale-105 cursor-pointer w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;