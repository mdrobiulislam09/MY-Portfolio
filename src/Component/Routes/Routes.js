import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Resume from "../Resume/Resume";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
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
            }
        ]
    }
   
])
export default router;