import LinkBack from '@/shared/components/ui/link-back'
import { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode
    title: string,
    description: string,
    url: string,
}

const ProjectPageTemplate: FC<Props> = ({
    children,
    title,
    description,
    url
}) => {
    return (
        <div className="flex justify-center items-center min-h-screen  h-full mb-2 w-full">
            <div className="rounded-md shadow-md w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl bg-card p-4 pt-2 flex flex-col items-end">
                <LinkBack />
                <div className="flex flex-col gap-y-4 items-start w-full">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {children}
                    <a className="underline cursor-pointer" href={url}>GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectPageTemplate