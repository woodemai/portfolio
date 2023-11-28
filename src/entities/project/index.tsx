import { FC, ReactNode } from "react"
import ProjectImage from "./components/ProjectImage"

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
    <div className="bg-card flex flex-row  justify-between items-center p-4 rounded-lg shadow-md w-full min-h-[100px]">
      <div className="flex flex-col gap-y-2">
        <a target="_blank" href={url} className="underline  cursor-pointer"><h3>{title}</h3></a>
        <p className="text-lignt"> {description}</p>
      </div>
      <div>
        <ProjectImage image={image} />
      </div>
    </div>
  )
}

export default Project