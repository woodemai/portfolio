import { ReactNode } from "react";

export interface IProject {
    title: string,
    description: string,
    url: string,
    image?: ReactNode | string,
}
