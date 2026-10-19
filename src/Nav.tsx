
import {Link} from "react-router";


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

        </>
    )
}