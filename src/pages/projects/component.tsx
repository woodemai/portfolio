import { IProject } from "@/entities/project";
import { convertText } from "@/entities/project/utils/convertText";
import ImageDialog from "@/features/ImageDialog";
import { Button } from "@/shared/components/ui/button";
import LinkBack from "@/shared/components/ui/link-back";
import { Github } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Component = () => {
    const [project, setProject] = useState<IProject | null>(null);
    const loaderData = useLoaderData();

    useEffect(() => {
        if (loaderData !== undefined) {
            setProject(loaderData as IProject)
        }
    }, [loaderData])

    const getTitle = useMemo(() => {
        return convertText(project?.title ?? "")
    }, [project?.title])


    if (project) {

        return (
            <div className="flex justify-center items-center min-h-screen  h-full mb-2 w-full">
                <div className="rounded-md shadow-md w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl bg-card p-4 pt-2 flex flex-col items-end">
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

                        <a target="_blank" href={project.repositoryURL}><Button size={"lg"}><Github /> GitHub</Button></a>
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