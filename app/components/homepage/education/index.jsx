// @flow strict
"use client";
import { educations } from "@/utils/data/educations";
import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";

function Education() {
  return (
    <div id="education" className="relative z-50 my-8 lg:my-16 px-6 md:px-12 mx-auto max-w-[92rem]">
      <div className="flex items-center justify-start mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:gap-8 max-w-3xl">
        {educations.map((education, index) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={education.id}
            className="bg-[#1e293b] border border-white/8 rounded-xl p-5 lg:p-6 flex flex-col md:flex-row gap-5 transition-all duration-300 hover:border-white/15 hover:-translate-y-1"
          >
            <div className="flex-shrink-0 mt-1 hidden md:block text-accent">
              <BsPersonWorkspace size={36} />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  {education.title}
                </h3>
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                  {education.duration}
                </span>
              </div>
              
              <p className="text-base lg:text-lg text-muted font-medium mb-2">
                {education.institution}
              </p>
              
              {education.gpa && (
                <p className="text-sm text-white font-semibold">
                  {education.gpa}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;