import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
import Blog from "../component/Blog/Blog";
import ChefDetails from "../component/ChefDetails/ChefDetails";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import FourZero from "../component/FourZero/FourZero";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path: '/chef-details/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:4000/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <FourZero></FourZero>
            }
        ]
    },
]);