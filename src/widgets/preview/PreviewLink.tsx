import { Button } from "@/shared/components/ui/button";
import { FC, ReactNode } from "react";

interface PreviewLinkProps {
    href: string,
    children?: ReactNode,
    imageSrc?: string
}

const PreviewLink: FC<PreviewLinkProps> = ({ href, children: label, imageSrc }) => {
    return (
        <a className="w-full" target="_blank" href={href}>
            <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black shadow-md flex flex-row gap-x-2 ">
                {imageSrc && <img src={imageSrc} alt="social-logo" width={16} />}
                {label}
            </Button>
        </a>
    )
}

export default PreviewLink;