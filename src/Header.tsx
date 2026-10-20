import "./App.css";
import {useEffect, useState} from "react";

export default function Header () {
    let [data,setData] = useState(document.title);
    useEffect(()=>{
        setData(document.title);
    },[data])
    return(
        <header>
            <h1>Alex Cho</h1>
            <p>Resume {data.substring(0,data.indexOf("|"))} Page</p>
        </header>
    )
}