import Header from './Header.tsx'
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useState,createContext} from 'react';

export const Context = createContext(useState("String"));
export default function App() {
    const router = createBrowserRouter(
        [
            {path: "*", Component:Nav}
        ]
    )
    const [data, setData] = useState("Home");


    return (
        // how to change header based on Nav? useContext
        <Context.Provider value={[data,setData]}>
            <Header/>
            <Nav/>
            <RouterProvider router={router}/>
            <Footer/>
        </Context.Provider>

    )
}
