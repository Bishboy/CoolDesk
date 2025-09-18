import { createBrowserRouter } from "react-router";
import Layout from "../component/Layout";
import Home from "./Home";
import { HOME_URL, POPULAR_ARTICLES_URL } from "./constant/urlConstant";
import PopularDatailsPage from "./PopularDatailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: HOME_URL,
                element: <Home />
            },
            {
                path: POPULAR_ARTICLES_URL,
                element: <PopularDatailsPage />
            }
        ]
    },
]);

export default router