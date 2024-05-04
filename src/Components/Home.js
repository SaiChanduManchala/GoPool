import React from "react";
import Navbar from "./Navbar";

import AboutPlaystore from "../Assets/google-play-icon.jpg";
import AboutApple from "../Assets/ios.svg";


const Home = () => {
  return (
    <section id="home_section">

    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
          Save Money on Cab Bookings with Pooling!
          </h1>
          <p className="primary-text">
          "Welcome to our cab booking pooling service! Are you tired of spending too much on individual cab rides? Pooling your cab bookings is a smart way to save money while enjoying the convenience of ridesharing."
          </p>
          
        </div>

        <div class="Appstore">
        <div class="Playstore">
            <a href="https://play.google.com/store/apps/details?id=com.cherryco.gopool.android" rel="noopener noreferrer">
              <img src={AboutPlaystore} alt="Get WayaMoney on Android" />
            </a>
            <div class="Apple">
            <a href="https://apps.apple.com/in/app/go-pool/id1661427392" rel="noopener noreferrer">
              <img src={AboutApple} alt="Get WayaMoney on iOS"/>
            </a>
            </div>
            </div>
          </div>
      </div>
      
      
    </div>
    </section>
    
  );
};

export default Home;
