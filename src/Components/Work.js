import React from "react";
import app_pic1 from "../Assets/app/pic1.png";
import app_pic2 from "../Assets/app/pic2.png";



const Work = () => {
  return (
    <section id="Appp">
      <div class="Appp-text"><h1>Application</h1></div>

      <div class="Appp">
        <div class="Appp-card pc-1 pc-light">
          <div class="Appp-image">
            <img src={app_pic1} alt="registration" />
          </div>
          <div class="Appp-desc">
            <h3>Register</h3>
            <p>
              Register/Login via mobile number.
              Update your personal details.
              Add a nice profile picture.
              Update first name, last name, gender and age
            </p>
          </div>
        </div>
        
        <div class="Appp-card pc-4 pc-dark">
          <div class="Appp-image">
            <img src={app_pic2} alt="find travelers" />
          </div>

          <div class="Appp-desc">
            <h3>Find travelers</h3>
            <p>
              Add your destination.
              You will see number of people traveling to same location
              Request for a call, discuss, meet, and ride together. Save money!
              Simple as that
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Work;
