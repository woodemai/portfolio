import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "@/pages/home/HomePage";
import WarehousePage from "@/pages/projects/warehouse";
import EducationPage from "@/pages/projects/education";
import GaragePage from "@/pages/projects/garageSale";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: '/warehouse',
                element: <WarehousePage/>
            },
            {
                path: '/new-education',
                element: <EducationPage/>
            },
            {
                path: '/garage-sale',
                element: <GaragePage/>
            },
        ]
    }
])

export default router;