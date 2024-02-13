import { FolderGit2 } from "lucide-react"
import { FC, ReactNode } from "react"

type Props = {
    image?: string | ReactNode
}

export const Logo: FC<Props> = ({ image }) => {

    if (image) {
        if (typeof image === 'string') {
            return <img src={image} alt="project logo" />
        } else {
            return <div>{image}</div>
        }
    }
    return (
        <div>
            <FolderGit2 width={96} height={96} />
        </div >
    )

}
