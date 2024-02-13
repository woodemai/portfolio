import { ProjectItem } from "@/entities/project"
import { projects } from "@/entities/project/data/projects"


const ProjectList = () => {
    return (
        <ul className="flex flex-col gap-y-4 justify-center w-full">
            <h2 className="text-left">My projects</h2>
            {projects.map(project => <ProjectItem key={project.title} {...project} />)}
        </ul>
    )
}

export default ProjectList