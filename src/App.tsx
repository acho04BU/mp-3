import Header from './Header.tsx'
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {useState} from 'react';

export const [data, setData] = useState("Index");


export default function App() {
    const router = createBrowserRouter(
        [
            {path: "*", Component:Nav}
        ]
    )

    return (
        // how to change header based on Nav? useContext
        <>
            <Header/>
            <Nav/>
            <RouterProvider router={router}/>
            <Footer/>
        </>

    )
}
