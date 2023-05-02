import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
import Blog from "../component/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:4000/chefs")
            }, 
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
]);