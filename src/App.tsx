import Root from './Root.tsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export default function App() {
    const router = createBrowserRouter(
        [
            {path: "*", Component:Root}
        ]
    )


    return (
        <RouterProvider router={router}/>
    )
}
