import stuyvesant from "./assets/stuyvesant.svg";
import bostonUniversity from "./assets/Boston_University_seal.svg";

import './App.css'


export default function Education() {
    return (
        <>
            <main>
                <title>Education | Resume</title>
                <div id="img-wrapper">
                    <img src={stuyvesant} alt="Stuyvesant High School Logo"/>
                    <img src={bostonUniversity} alt="Boston University Logo"/>
                </div>
                <h4>Boston University, Boston, Massachusetts - Class of 2028</h4>
                <br/>
                <h4>Stuyvesant High School, New York, NY - Class of 2022</h4>
                <h5>GPA (cumulative): 93.64 (Junior: 96.3. Sophomore: 92.8. Freshman: 91.9)
                    AP and Honor Courses: AP Physics 1 (5), AP Computer Science (5); Honors Physics, Honors Chemistry,
                    Honors Geometry, AP World History, AP Physics C (12th gr), AP Calculus BC (12th gr), AP
                    Macroeconomics (12th gr)
                    SAT: 1550 (800 Math, 750 Verbal)</h5>
            </main>
        </>

    )
}
