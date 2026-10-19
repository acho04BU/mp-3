import Index from "./Index.tsx";
import Experiences from "./Experiences.tsx";
import Education from "./Education.tsx";
import Research from "./Research.tsx";
import References from "./References.tsx";
import Projects from "./Projects.tsx";
import {Link, Routes, Route} from "react-router";


export default function Nav () {

    return(
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/education"}>Education</Link></li>
                    <li><Link to={"/experiences"}>Experiences</Link></li>
                    <li><Link to={"/research"}>Research</Link></li>
                    <li><Link to={"/references"}>References</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path={"/"} element={<Index/>}/>
                <Route path={"/education"} element={<Education/>}/>
                <Route path={"/experiences"} element={<Experiences/>}/>
                <Route path={"/research"} element={<Research/>}/>
                <Route path={"/references"} element={<References />}/>
                <Route path={"/projects"} element={<Projects/>}/>
            </Routes>
        </>
    )
}