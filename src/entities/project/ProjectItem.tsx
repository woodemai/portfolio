import { FC, ReactNode, useMemo } from "react"
import { Link } from "react-router-dom"
import { translit } from "./utils/translit"
import { Logo } from "../../features/project/Logo"
import { convertText } from "./utils/convertText"

type Props = {
  title: string
  description: string
  image?: string | ReactNode,
}

export const ProjectItem: FC<Props> = ({
  title,
  description,
  image,
}) => {

  const getTitle = useMemo(() => {
    return convertText(title)
  }, [title])

  return (
    <li>
      <Link to={`/project/${translit(title)}`}>
        <div className="hover:scale-105  transition-all duration-300 bg-card flex flex-col sm:flex-row  justify-between items-center p-4 rounded-lg shadow-md w-full min-h-[100px]">
          <div className="flex flex-col gap-y-2">
            <h3>{getTitle}</h3>
            <p className="text-light"> {description}</p>
          </div>
          <Logo image={image} />
        </div>
      </Link>
    </li>
  )
}

