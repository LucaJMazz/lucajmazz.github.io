import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import AboutMe from './components/aboutme/AboutMe.jsx'
import Projects from './components/projectspage/Projects.jsx';
import './App.css'
import CreativeWorks from './components/creative-works/CreativeWorks.jsx';

function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/creative-works" element={<CreativeWorks />} />
      <Route path="*" element={<div />} />
    </Routes>
  )
}

export default App
