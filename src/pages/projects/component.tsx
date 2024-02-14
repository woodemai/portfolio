import { IProject } from "@/entities/project";
import { convertText } from "@/entities/project/utils/convertText";
import ImageDialog from "@/features/ImageDialog";
import { Button } from "@/shared/components/ui/button";
import LinkBack from "@/shared/components/ui/link-back";
import { ArrowUp, Github } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Component = () => {
    const [project, setProject] = useState<IProject | null>(null);
    const loaderData = useLoaderData();

    const top = useRef(null)

    useEffect(() => {
        if (loaderData !== undefined) {
            setProject(loaderData as IProject)
        }
    }, [loaderData])


    const getTitle = useMemo(() => {
        return convertText(project?.title ?? "")
    }, [project?.title])

    useEffect(() => {
        document.title = `Проект ${getTitle}`
        scrollToTop()
    }, [getTitle])

    const scrollToTop = () => {
        if (top.current) {
            window.scrollTo({
                top: top.current,
                behavior: 'smooth'
            })
        }
    }

    if (project) {

        return (
            <div ref={top} className="flex justify-center items-center min-h-screen  h-full mb-2 w-full">
                <div className="rounded-md shadow-md w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl bg-gradient-to-bl from-lime-100 to-green-100 dark:from-sky-900 dark:to-blue-900 p-4 pt-2 flex flex-col items-end">
                    <LinkBack />
                    <div className="flex flex-col gap-y-4 items-start w-full">
                        <h2>{getTitle}</h2>
                        <p>{project.description}</p>
                        {project.usedLibraries.length > 0 &&
                            <div>
                                <h3>Используемые библиотеки:</h3>
                                <ul className="flex flex-col gap-y-4">
                                    {project.usedLibraries.map(item =>
                                        <li key={item}>
                                            {item}
                                        </li>)}
                                </ul>
                            </div>}
                        {project.screenshots.map(screenshot =>
                            <ImageDialog key={screenshot} image={screenshot} />)}
                        <div className="flex justify-between w-full gap-x-4">
                            <a className="w-full" target="_blank" href={project.repositoryURL} ><Button className="flex justify-center w-full"><Github /> <span>GitHub</span></Button></a>
                            <Button className="flex justify-center w-full" onClick={scrollToTop}><ArrowUp /><span>К началу</span></Button>
                        </div>

                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full flex justify-center items-center my-80">
                <div className="bg-card p-4 rounded-md shadow-md flex flex-col justify-center items-center gap-y-4">
                    <h3>Проект не найден</h3>
                    <LinkBack withText />
                </div>
            </div>
        )
    }
}

export default Component;