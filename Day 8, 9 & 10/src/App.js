import React, { useState,lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import Home from './Home';
// import About from './About';
import Help from './Help';
import Navbar from './Navbar';
import ThemeContext from "./ThemeContext.js";
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const About = lazy(() => import("./About/index.js"));

const App = () => {
const [theme, setTheme] = useState("light");
  return (
    <>
    <ThemeContext.Provider value={{theme:theme,setTheme:setTheme}}>
        <Navbar/>
        <Outlet/>
    </ThemeContext.Provider>
    </>
  )
}

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorComponent/>,
        children:[
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/about',
                element:<Suspense fallback={<h1>Lazy Loading</h1>}>
                    <About/>
                </Suspense>
            },
            {
                path:'/help',
                element:<Help/>
            }
        ]
    }
]);

rootElement.render(<RouterProvider router={router} />);