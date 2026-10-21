import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import Reveal from "../../helper/reveal";
export default function Projects() {
  return <section id="projects" className="mx-auto max-w-[90rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"><Reveal className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between"><div><span className="section-kicker">Selected work</span><h2 className="mt-5 text-5xl font-semibold tracking-[-.06em] sm:text-7xl">Built for the real world.</h2></div><p className="max-w-sm text-sm leading-6 text-muted">A selection of systems built around accessibility, personal safety, public health and operational resilience.</p></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-2">{projectsData.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div></section>;
}
