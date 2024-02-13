import { ReactNode } from "react";

export interface IProject {
  title: string;
  description: string;
  repositoryURL: string;
  screenshots: string[];
  usedLibraries: string[];
  image?: ReactNode | string;
}
