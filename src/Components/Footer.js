import React from "react";
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer">

        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.4111853338835!2d-118.30907039597035!3d34.18437554053281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c295d442cb53e5%3A0xc2030e66eafd342f!2szippy%20services!5e0!3m2!1sen!2sin!4v1639843453078!5m2!1sen!2sin"
            width="225"
            height="120"
            style={{border: 0}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div> 

        <div class="fo-address fo">
          <div class="fo-add-head">
            <h3>OFFICE ADDRESS</h3>
          </div>
          <div class="fo-add-content">
            <a href="https://goo.gl/maps/QPnLhsJFdpu25zkM6">
              <p>Hill Top, Ram Nagar,</p>
              <p>Nagpur, MH 440033</p>
            </a>
          </div>
        </div>
        <div class="fo-follow-us fo">
          <div class="fo-fol-head">
            <h3>FOLLOW US</h3>
          </div>
          <div class="fo-fol-content">
            <div class="fo-row-1">
              <a
                target="blank"
                href="https://www.instagram.com/akash_aj">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a target="blank" href="https://www.facebook.com"
              > <FontAwesomeIcon icon={faFacebookF} /></a>
              <a target="blank" href="https://www.linkedin.com/in/akash-a-jadhav">
              <FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>

        <div class="fo-contact-us fo">
          <div class="fo-con-head">
            <h3>CONTACT US</h3>
          </div>
          <div class="fo-con-content">
            <div class="fo-phone">
              <a href="#" class="fo-p">+91 8010251508</a>
            </div>
            <div class="fo-mail">
              <a href="#" class="fo-p">akash@cherryco.in</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
