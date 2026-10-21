// @flow strict
"use client";
import { skillsData } from "@/utils/data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div id="skills" className="relative z-50 my-8 lg:my-16 px-6 md:px-12 mx-auto max-w-[92rem]">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
          Core Technologies
        </h2>
        <p className="text-sm text-muted text-center max-w-xl">
          Languages, frameworks, and tools I use to build scalable ML systems and backend infrastructure.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 lg:gap-2.5 max-w-3xl mx-auto">
        {skillsData.map((skill, id) => (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: id * 0.03 }}
            viewport={{ once: true }}
            key={id}
            className="px-4 py-2 rounded-full bg-[#0f172a] border border-white/5 text-sm text-muted font-medium hover:text-white hover:border-accent/40 transition-all cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;