import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "@/pages/home/HomePage";
import WarehousePage from "@/pages/projects/warehouse";
import EducationPage from "@/pages/projects/education";
import GaragePage from "@/pages/projects/garageSale";
import { createRef } from "react";

export const routes = [
    {
        path: "/",
        name: "Home",
        element: <HomePage />,
        nodeRef: createRef()
    },
    {
        path: '/warehouse',
        name: "Warehouse",
        element: <WarehousePage />,
        nodeRef: createRef()
    },
    {
        path: '/new-education',
        name: "New education",
        element: <EducationPage />,
        nodeRef: createRef()
    },
    {
        path: '/garage-sale',
        name: "Garage sale",
        element: <GaragePage />,
        nodeRef: createRef()
    },
]
const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: routes.map(route => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element
        }))
    }
])

export default router;