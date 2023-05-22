import React from "react";
import './index.css'
import { Home } from "./Home";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./AboutUs";
import Work from "./Work";
import Contact from "./Contact";


function App() {
  return (
    <>
    <div className="app">
    <Home />
    <AboutUs/>
    <Work/>
    <Contact/>
    </div>
    </>
  );
}

export default App;
