import './App.css'
import {useContext} from "react";
import photo from "./assets/alex_cho_photo.jpeg";

import {Context} from "./App.tsx";

export default function Index() {
    const setData = useContext(Context)[1];
    setData("Home");
    return (
        <>
            <main>
                <img src={photo} alt="Alex Cho"/>
                <p>
                    Hello! My name is Alex Cho, and I am a student at Boston University studying Computer Science.
                    I'm currently planned to graduate in the Spring of 2028, and I'm interested in learning software and
                    Web
                    development.
                    <br/>
                    This website was created to help showcase my resume. You can check out the other pages to find out
                    more about me!

                </p>
            </main>
        </>

    )
}
