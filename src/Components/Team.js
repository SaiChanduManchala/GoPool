import React from "react";
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonial = () => {
  return (
    <section id="Team">
    <div class="GoPool-team">
      <div class="GoPool-head">
        <h1>Team</h1>
      </div>
      <div class="GoPool-team-members">
        <div class="gtm-row gtm-row-1">
          <div class="gtm-card gtm-card-1">
            <div class="gtm-img gtm-img-1">
              <div class="gtm-social-icon">
                <a
                  target="blank"
                  href="https://workspace.google.com/intl/en_in/"
                  ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a target="blank" href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a target="blank" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} /></a>
                
              </div>
              
            </div>
            <div class="gtm-desc">
              <h3 class="gtm-name">Akash Jadhav</h3>
              <p class="gtm-role">Founder</p>
            </div>
          </div>
          <div class="gtm-card gtm-card-2">
            <div class="gtm-img gtm-img-2">
              <div class="gtm-social-icon">
                <a
                  target="blank"
                  href="https://workspace.google.com/intl/en_in/"
                  ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a target="blank" href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a target="blank" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              
            </div>
            <div class="gtm-desc">
              <h3 class="gtm-name">Neeraj Gulati</h3>
              <p class="gtm-role">Advisory Board</p>
            </div>
          </div>
          <div class="gtm-card gtm-card-3">
            <div class="gtm-img gtm-img-3">
              <div class="gtm-social-icon">
                <a
                  target="blank"
                  href="https://workspace.google.com/intl/en_in/"
                  ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a target="blank" href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a target="blank" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              
            </div>
            <div class="gtm-desc">
              <h3 class="gtm-name">
                Shreya Kukreja</h3>
              <p class="gtm-role">Director of Product</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  );
};

export default Testimonial;
