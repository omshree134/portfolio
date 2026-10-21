// @flow strict
import { projectsData } from '@/utils/data/projects-data';
import SectionHeading from "../../helper/section-heading";
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <section id='projects' className="my-16 lg:my-24">
      <SectionHeading
        cue="04"
        title="Featured Projects"
        sub="Systems built to solve real problems — accessibility, safety, public health, and supply chains."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {projectsData.slice(0, 6).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
