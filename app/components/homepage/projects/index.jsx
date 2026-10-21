// @flow strict
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-8 lg:my-16 px-6 md:px-12 mx-auto max-w-[92rem]">
      <div className="flex items-center justify-start mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projectsData.slice(0, 6).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
