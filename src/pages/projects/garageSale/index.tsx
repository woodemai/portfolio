import { IProject } from "@/entities/project/types"
import ProjectPageTemplate from "@/features/ProjectPageTemplate"
import { Car } from "lucide-react"

const project: IProject = {
    title: "Garage-sale",
    description: "This is a site for selling stuff that you don't want to keep anymore. Building with Next.js. Using server side rendering and prisma orm. Next auth for authentication.",
    url: "https://github.com/woodemai/garageSale",
    image: <Car width={96} height={96} />
}

const GaragePage = () => {
    return (
        <ProjectPageTemplate title={project.title} description={project.description} url={project.url}>
            
        </ProjectPageTemplate>
    )
}

export default GaragePage