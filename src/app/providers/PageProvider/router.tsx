import { Params, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "@/pages/home/HomePage";
import { createRef } from "react";
import ErrorPage from "@/pages/error/ErrorPage";

export const routes = [
    {
        path: "/",
        name: "Home",
        element: <HomePage />,
        nodeRef: createRef(),
    },
    {
        path: '/project/:title',
        nodeRef: createRef(),
        async loader({ params }: { params: Params }) {
            return (await import('@/pages/projects/loader')).loader({ params });
        },
        lazy: () => import("@/pages/projects/component")
    },
]
const router = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: routes.map(route => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element ?? undefined,
            loader: route.loader ?? undefined,
            lazy: route.lazy ?? undefined
        }))
    }
])

export default router;