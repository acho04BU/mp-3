import './App.css'
import photo from "./assets/alex_cho_photo.jpeg";

export default function Index() {

    return (
        <>
            <main>
                <title>Home | Resume</title>
                <img src={photo} alt="Alex Cho"/>
                <p>
                    Hello! My name is Alex Cho, and I am a student at Boston University studying Computer Science.
                    I'm currently planned to graduate in the Spring of 2028, and I'm interested in learning software and
                    Web
                    development.
                    <br/>
                    This website was created to help showcase my resume. You can check out the other pages to find out
                    more about me!

                </p>
            </main>
        </>

    )
}
