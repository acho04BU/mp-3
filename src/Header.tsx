import {Context} from "./App.tsx"
import {useContext} from "react";

export default function Header () {
    const data = useContext(Context)[0];
    return(
        <header>
            <h1>Alex Cho</h1>
            <p>Resume {data} Page</p>
        </header>
    )
}