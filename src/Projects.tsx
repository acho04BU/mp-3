import {setData} from "./App.tsx";
import './App.css'


export default function Projects() {
    setData("Projects");
    return (
        <>
            <main>
                <div id="helmet-wrapper">
                    <div id="calc-wrapper">
                        <div id="input-wrapper">
                            <label htmlFor="first-input"></label><input id="first-input"/>
                            <label htmlFor="second-input"></label><input id="second-input"/>
                        </div>
                        <div id="buttons-wrapper">
                            <button onClick="addition()">+</button>
                            <button onClick="subtraction()">-</button>
                            <button onClick="multiplication()">*</button>
                            <button onClick="division()">/</button>
                            <button onClick="power()">**</button>
                            <button onClick="clearInput()">clear</button>

                        </div>
                    </div>
                </div>
                <div id="aligner">
                    <p id="output"></p>
                </div>
            </main>
        </>

    )
}
