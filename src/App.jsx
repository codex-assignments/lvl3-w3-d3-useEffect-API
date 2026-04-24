import { useState } from "react";

import "./App.css";
import ApodCard from "./components/Home/ApodCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Routes, Route } from "react-router";

function App() {
  
return (
  <div className="wrapper">
    <NavBar />
    <Routes>
      <Route path="/lvl3-w3-d3-useEffect-API/" index element={<Home />} />
      <Route path="/lvl3-w3-d3-useEffect-API/about" element={<About />} />
    </Routes>
    <Footer />
  </div>
);

}
export default App;
