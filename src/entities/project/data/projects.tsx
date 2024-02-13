import { GraduationCap, Car, Spade } from "lucide-react";
import { IProject } from "../types";

export const projects: IProject[] = [
  {
    title: "warehouse",
    description:
      "This is full-stack project with server on Java (using SpringBoot) and client on React",
    repositoryURL: "https://github.com/woodemai/warehouse",
    screenshots: [
      "/warehouse/loginPage.png",
      "/warehouse/itemsPage.png",
      "/warehouse/profilePage.png"
    ],
    usedLibraries: []
  },
  {
    title: "new education",
    description:
      "This is an educational site. Building with Next.js. Using server side rendering and prisma orm. Next auth for authentication.",
    repositoryURL: "https://github.com/woodemai/new_education_nextjs13",
    image: <GraduationCap width={96} height={96} />,
    screenshots: [],
    usedLibraries: []
  },
  {
    title: "garage sale",
    description:
      "This is a site for selling stuff that you don't want to keep anymore. Building with Next.js. Using server side rendering and prisma orm. Next auth for authentication.",
    repositoryURL: "https://github.com/woodemai/garageSale",
    image: <Car width={96} height={96} />,
    screenshots: [],
    usedLibraries: []
  },
  {
    title: "преферанс",
    description:
      'Онлайн карточная игра "Преферанс". Взаимодейсвтие сервера и клиента реализовано с помощью RTK Query для REST API и с помощью Socket.io во время игровового процесса для быстрых изменений в игре.',
    repositoryURL: "https://github.com/woodemai/garageSale",
    image: <Spade width={96} height={96} />,
    screenshots: [
      "/preferans/game-in-progress.png",
      "/preferans/game-table.png",
      "/preferans/trading-screen.png"
    ],
    usedLibraries: [
      "React - библиотека для создания пользовательских интерфейсов",
      "Redux Toolkit, RTK Query - стейт менеджер и дополнения к нему для удобных запросов к API",
      "Socket.io - Библиотека для быстрого обмена информации с серверов, использует лонг пуллинг и веб сокеты",
    ]
  },
];
