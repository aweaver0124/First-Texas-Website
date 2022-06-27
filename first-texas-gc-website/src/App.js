import React from "react";
import './App.css';
// import { EasybaseProvider, useEasybase } from 'easybase-react';
import { Routes, Route } from 'react-router-dom'
import Header from "./Header";
import Home from "./Home"
import About from "./About";
import Gallery from "./Gallery";

function App() {


return(
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services"></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact"></Route>
      <Route path="/inspection"></Route>
    </Routes>
  </div>
)

}

export default App;