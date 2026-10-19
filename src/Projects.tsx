import {Context} from "./App.tsx";
import './App.css'
import Calculator from "./Calculator.tsx";
import {useContext} from "react";

export default function Projects() {
    const setData = useContext(Context)[1];
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
                            <button onClick={() => Calculator("add")}>+</button>
                            <button onClick={() => Calculator("subtract")}>-</button>
                            <button onClick={() => Calculator("multiply")}>*</button>
                            <button onClick={() => Calculator("divide")}>/</button>
                            <button onClick={() => Calculator("power")}>**</button>
                            <button onClick={() => Calculator("clear")}>clear</button>

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
