import "./App.css";
import '@fortawesome/fontawesome-free/css/all.css';
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Team from "./Components/Team";
import Feedback from "./Components/Feedback";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Welcome from "./Components/Welcome";
import React from 'react';


function App() {
  return (
    <div className="App">
      
      <Home />
      <Welcome />
      <Work />
      <About />
      <Team />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
