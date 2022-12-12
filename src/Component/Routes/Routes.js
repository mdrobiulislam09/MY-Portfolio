import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('datas.json')
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path:'/project/:id',
                element:<Project></Project>
            }
        ]
    }
   
])
export default router;