import { Suspense, lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
const AboutMe = lazy(() => import('./components/aboutme/AboutMe.jsx'))
const Projects = lazy(() => import('./components/projectspage/Projects.jsx'));
const CreativeWorks = lazy(() => import('./components/creative-works/CreativeWorks.jsx'));
const NoPath = lazy(() => import('./components/404/NoPath.jsx'));
import './App.css'

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/creative-works" element={<CreativeWorks />} />
        <Route path="*" element={<NoPath />} />
      </Routes>
    </Suspense>
  )
}

export default App
