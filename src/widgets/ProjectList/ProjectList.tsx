import { ProjectItem } from "@/entities/project"
import { projects } from "@/entities/project/data/projects"


const ProjectList = () => {
    return (
        <section>
            <h2 className="mb-4">Проекты</h2>
            <ul className="flex flex-col gap-y-4 justify-center w-full">
                {projects.map(project => <ProjectItem key={project.title} {...project} />)}
            </ul>
        </section>
    )
}

export default ProjectList