import Nav from "./Nav.tsx";
import Header from "./Header.tsx";
import {Route, Routes} from "react-router";
import Index from "./Index.tsx";
import Education from "./Education.tsx";
import Experiences from "./Experiences.tsx";
import Research from "./Research.tsx";
import References from "./References.tsx";
import Projects from "./Projects.tsx";
import Footer from "./Footer.tsx";

export default function Root(){

    return (
        // how to change header based on Nav? useContext
        <>
            <Header/>
            <div id={"wrap"}>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<Index/>}/>
                    <Route path={"/education"} element={<Education/>}/>
                    <Route path={"/experiences"} element={<Experiences/>}/>
                    <Route path={"/research"} element={<Research/>}/>
                    <Route path={"/references"} element={<References />}/>
                    <Route path={"/projects"} element={<Projects/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}