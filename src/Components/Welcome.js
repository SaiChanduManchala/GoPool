import React from "react";
import Car from "../Assets/welcome/booking.png";
import Bell_icon from "../Assets/welcome/person-login.jpg";
import env_icon from "../Assets/welcome/search.png";
import drawer_icon from "../Assets/welcome/tick-icon.png";

const Welcome = () => {
  return (

    <section id="welcome">
      <div class="welcome">
        <div class="welcome-text">
          <h1>Welcome to GoPool</h1>
        </div>
        <div class="welcome-brief">
          <div class="wb-text">
            <p>
              Pooling cab bookings allows you to split the fare with other passengers, reducing your individual cost significantly.
            </p>
          </div>
          <div class="wb-img">
            <img src={Car} alt="car" />
          </div>
        </div>
        <div class="welcome-cards">
          <div class="wc-1 wc">
            <div class="wc-icon">
              <img
                class="bell-icon icon"
                src={Bell_icon}
                alt="bell"
              />
            </div>
            <div class="wc-head">
              <h3>Register Yourself</h3>
            </div>
            <div class="wc-text">
              <p>
                Registering with your details allows you to browse and join existing cab pools, according to your specific route and schedule.
              </p>
            </div>
            <div class="wc-btn">
              <a href="#" class="lm">Learn More</a>
            </div>
          </div>
          <div class="wc-2 wc">
            <div class="wc-icon">
              <img
                class="env-icon icon"
                src={env_icon}
                alt="env"
              />
            </div>
            <div class="wc-head">
              <h3>Searching</h3>
            </div>
            <div class="wc-text">
              <p>
                Discover shared rides to your destination, connect with fellow travelers, and split fares for cost-effective transportation.
              </p>
            </div>
            <div class="wc-btn">
              <a href="#" class="lm">Learn More</a>
            </div>
          </div>
          <div class="wc-3 wc">
            <div class="wc-icon">
              <img
                class="drawer-icon icon"
                src={drawer_icon}
                alt="drawer"
              />
            </div>
            <div class="wc-head">
              <h3>Verified</h3>
            </div>
            <div class="wc-text">
              <p>
                
                Enhanced security with Aadhaar verification! Look for the green tick to identify verified accounts.
              </p>
            </div>
            <div class="wc-btn">
              <a href="#" class="lm">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Welcome;