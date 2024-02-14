import { FC, useMemo } from "react"
import { Link } from "react-router-dom"
import { translit } from "./utils/translit"
import { convertText } from "./utils/convertText"

type Props = {
  title: string
  description: string
}

export const ProjectItem: FC<Props> = ({
  title,
  description,
}) => {

  const getTitle = useMemo(() => {
    return convertText(title)
  }, [title])

  return (
    <li>
      <Link to={`/project/${translit(title)}`} className="hover:scale-105 transition-all duration-200 bg-gradient-to-bl from-lime-100 to-green-100 dark:from-sky-900 dark:to-blue-900 flex flex-col p-4 rounded-md shadow-md">
        <h3>{getTitle}</h3>
        <p className="text-light"> {description}</p>
      </Link>
    </li>
  )
}

