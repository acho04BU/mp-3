import {Context} from "./App.tsx";
import './App.css'
import {useContext} from "react";


export default function References() {
    const setData = useContext(Context)[1];
    setData("References");
    return (
        <>
            <main>
                <a id="in-h4" href="https://www.bu.edu/cs/profiles/taymaz-davoodi/">Taymaz Davoodi</a>
                <h5>Computer Science Instructor at Boston University specializing in web development</h5>
            </main>
        </>

    )
}
