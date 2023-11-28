import { IProject } from "@/entities/project/types"
import ImageDialog from "@/features/ImageDialog"
import ProjectPageTemplate from "@/features/ProjectPageTemplate"
import LinkBack from "@/shared/components/ui/link-back"

const project: IProject = {
    title: "Warehouse",
    description: "This is full-stack project with server on Java (using SpringBoot) and client on React",
    url: "https://github.com/woodemai/warehouse"
}
const images = [
    "warehouse/loginPage.png",
    "warehouse/itemsPage.png",
    "warehouse/profilePage.png"
]

const WarehousePage = () => {
    return (
        <ProjectPageTemplate title={project.title} description={project.description} url={project.url}>
            <h4 className="tracking-tighter font-semibold">Common technologies:</h4>
            <ul className="ml-4">
                <li>React</li>
                <li>Vite</li>
                <li>MobX</li>
                <li>Spring Boot</li>
                <li>JWT authentication</li>
                <li>Lazy loading</li>
            </ul>
            <h4>Screenshots</h4>
            {images.map(image => <ImageDialog image={image} key={image}/>)}
        </ProjectPageTemplate>
    )
}

export default WarehousePage