import { FolderGit2 } from "lucide-react"
import { FC, ReactNode } from "react"

type Props = {
    image?: string | ReactNode
}

const ProjectImage: FC<Props> = ({ image }) => {
    
    if (Boolean(image)) {
        if (typeof image === 'string') {
            return <img src={image} alt="image" />
        } else {
            return image;
        }
    }
    return <FolderGit2 width={96} height={96} />
}

export default ProjectImage