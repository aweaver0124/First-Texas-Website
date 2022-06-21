import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from "./Header";
import Home from "./Home"

function App() {


return(
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services"></Route>
      <Route path="/about"></Route>
      <Route path="/contact"></Route>
      <Route path="inspection"></Route>
    </Routes>
  </div>
)

}

export default App;