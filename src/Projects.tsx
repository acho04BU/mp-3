import './App.css'
import Calculator from "./Calculator.tsx";
import {useState} from "react";

export default function Projects() {

    const [first, setFirst] = useState(0);
    const [second, setSecond]= useState(0);
    const [output, setOutput]=useState('');

    return (
        <>
            <main>
                <title>Projects | Resume</title>
                <div id="helmet-wrapper">
                    <div id="calc-wrapper">
                        <div id="input-wrapper">
                            <label htmlFor="first-input"></label>
                            <input
                                id="first-input"
                                value={first}
                                onChange={(e) => {setFirst(Number(e.target.value))}}
                            />
                            <label htmlFor="second-input"></label>
                            <input
                                id="second-input"
                                value={second}
                                onChange={(e) => {setSecond(Number(e.target.value))}}
                            />
                        </div>
                        <div id="buttons-wrapper">
                            <button onClick={() => Calculator("add",first,second,setFirst,setSecond,setOutput)}>+</button>
                            <button onClick={() => Calculator("subtract",first,second,setFirst,setSecond,setOutput)}>-</button>
                            <button onClick={() => Calculator("multiply",first,second,setFirst,setSecond,setOutput)}>*</button>
                            <button onClick={() => Calculator("divide",first,second,setFirst,setSecond,setOutput)}>/</button>
                            <button onClick={() => Calculator("power",first,second,setFirst,setSecond,setOutput)}>**</button>
                            <button onClick={() => Calculator("clear",first,second,setFirst,setSecond,setOutput)}>clear</button>
                        </div>
                    </div>
                </div>
                <div id="aligner">
                    <p id="output">{output}</p>
                </div>
            </main>
        </>

    )
}
