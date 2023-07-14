import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import PersonalDetailFormPage from '../pages/PersonalDetailFormPage';
import CitizenshipFormPage from "../pages/CitizenshipFormPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/personaldetail",
                element : <PersonalDetailFormPage />
            },
            {
                path:"/citizenshipdetail",
                element : <CitizenshipFormPage />
            }
        ]
    }
])

export default router