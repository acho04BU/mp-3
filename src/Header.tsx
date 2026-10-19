import {UserContext} from "./App.tsx"
import {useContext} from "react";

export default function Header () {
    const siteData = useContext(UserContext)

    return(
        <header>
            <h1>Alex Cho</h1>
            <p>Resume {siteData} Page</p>
        </header>
    )
}