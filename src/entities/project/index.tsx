import { FC, ReactNode } from "react"
import ProjectImage from "./components/ProjectImage"
import { Link } from "react-router-dom"

type Props = {
  title: string
  description: string
  image?: string | ReactNode,
  url: string
}

const Project: FC<Props> = ({
  title,
  description,
  image,
  url
}) => {

  return (
    <Link to={`/${title.toLowerCase()}`}>
    <div className="hover:scale-105  transition-all durantion-300 bg-card flex flex-row  justify-between items-center p-4 rounded-lg shadow-md w-full min-h-[100px]">
      <div className="flex flex-col gap-y-2">
        <a target="_blank" href={url} className="underline  cursor-pointer"><h3>{title}</h3></a>
        <p className="text-lignt"> {description}</p>
      </div>
      <div>
        <ProjectImage image={image} />
      </div>
    </div>
    </Link>
  )
}

export default Project