import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "",
                element: <HomePage />
            }
        ]
    }
])

export default router