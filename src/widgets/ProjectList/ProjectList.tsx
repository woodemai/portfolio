import Project from "@/entities/project"
import { Car, GraduationCap } from "lucide-react"
import { ReactNode } from "react"

interface IProject {
    title: string,
    description: string,
    url: string,
    image?: ReactNode | string,
}

const projects:IProject[] = [
    {
        title: "Warehouse",
        description: "This is full-stack project with server on Java (using SpringBoot) and client on React",
        url: "https://github.com/woodemai/warehouse"
    },
    {
        title: "New education",
        description: "This is an educational site. Building with Next.js. Using server side rendering and prisma orm. Next auth for authentication.",
        url: "https://github.com/woodemai/new_education_nextjs13",
        image: <GraduationCap width={96} height={96}/>
    },
    {
        title: "Garage sale",
        description: "This is a site for selling stuff that you don't want to keep anymore. Building with Next.js. Using server side rendering and prisma orm. Next auth for authentication.",
        url: "https://github.com/woodemai/garageSale",
        image: <Car width={96} height={96}/>
    },
]

const ProjectList = () => {
    return (
        <div className="flex flex-col gap-y-4 items-center justify-center w-full sm:max-w-md">
            <h2 className="text-left">My projects</h2>
            {projects.map(project => <Project key={project.title} {...project}/>)}
        </div>
    )
}

export default ProjectList