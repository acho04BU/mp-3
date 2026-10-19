import Header from './Header.tsx'
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {createContext} from 'react';

export const UserContext = createContext("Index");


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
