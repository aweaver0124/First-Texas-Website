import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from "./Header";
import Home from "./Home"
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services"
import Contact from "./Contact";


function App() {


return(
  <div className="app">
    <Header />

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>


    
  </div>
)

}

export default App;