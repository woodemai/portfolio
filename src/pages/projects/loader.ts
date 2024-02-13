import { projects, translit } from "@/entities/project";
import { Params } from "react-router-dom";

export const loader = ({ params }: { params: Params }) => {
  return projects.find((item) => translit(item.title) === params["title"]);
};
