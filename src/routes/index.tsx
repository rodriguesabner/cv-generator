import {createBrowserRouter,} from "react-router-dom";
import Generator from "../pages/Generator";
import Visualizer from "../pages/Visualizer";
import {Root} from "../Root";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import Dashboard from "../pages/Home/Dashboard";
import JobCompatibilityAnalysis from "../pages/Home/JobCompabilityAnalysis";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                index: true,
                element: <Home/>,
            },
            {
                path: "generate",
                element: <Generator/>,
            },
            {
                path: "view",
                element: <Visualizer/>,
            },
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "dashboard",
                element: <Dashboard/>,
            },
            {
                path: "dashboard/compatibility",
                element: <JobCompatibilityAnalysis/>,
            },
        ]
    },
]);

export default router;
