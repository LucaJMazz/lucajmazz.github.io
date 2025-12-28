import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import AboutMe from './components/aboutme/AboutMe.jsx'
import './App.css'

function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
