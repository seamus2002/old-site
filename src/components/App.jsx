import React from "react";

import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return <div>
    <Navbar />
    <HomePage />
    <About />
    <Projects />
    <Contact />
  </div>;
}

export default App;