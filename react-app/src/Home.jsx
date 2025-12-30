import Landing from "./components/landing/Landing";
import AboutMe from "./components/aboutme/AboutMe";
import Projects from "./components/projectspage/Projects";
import ScrollDivider from "./components/dividers/ScrollDivider";
import CreativeWorks from "./components/creative-works/CreativeWorks";

function Home() {
    return (
        <>
            <Landing />
            <ScrollDivider />
            <div className="my-4" />
            <AboutMe />
            <ScrollDivider />
            <Projects />
            <CreativeWorks />
        </>
    )
}

export default Home;