import { IProject } from "@/entities/project/types"
import ProjectPageTemplate from "@/features/ProjectPageTemplate"
import { GraduationCap } from "lucide-react"

const project: IProject = {
    title: "New-education",
    description: "This is an educational site. Building with Next.js. Using server side rendering and prisma orm. Next auth for authentication.",
    url: "https://github.com/woodemai/new_education_nextjs13",
    image: <GraduationCap width={96} height={96} />
}

const EducationPage = () => {
    return (
        <ProjectPageTemplate title={project.title} description={project.description} url={project.url}>
    
        </ProjectPageTemplate>
    )
}

export default EducationPage