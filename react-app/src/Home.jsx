import { Suspense, lazy } from 'react'
import Landing from "./components/landing/Landing";
import ScrollDivider from "./components/dividers/ScrollDivider";
const AboutMe = lazy(() => import("./components/aboutme/AboutMe"));
const Projects = lazy(() => import("./components/projectspage/Projects"));
const CreativeWorks = lazy(() => import("./components/creative-works/CreativeWorks"));

function Home() {
    return (
        <>
            <Landing />
            <ScrollDivider />
            <div className="my-4" />
            <Suspense fallback={null}>
                <AboutMe />
            </Suspense>
            <ScrollDivider />
            <Suspense fallback={null}>
                <Projects />
            </Suspense>
            <Suspense fallback={null}>
                <CreativeWorks />
            </Suspense>
        </>
    )
}

export default Home;