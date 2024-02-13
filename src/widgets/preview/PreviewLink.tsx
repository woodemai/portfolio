import { Button } from "@/shared/components/ui/button";
import { FC } from "react";

interface PreviewLinkProps {
    href: string,
    label: string
}

const PreviewLink: FC<PreviewLinkProps> = ({href, label}) => {

    return <Button className="w-full" variant={'secondary'}><a target="_blank" href={href}>{label}</a></Button>
}

export default PreviewLink;