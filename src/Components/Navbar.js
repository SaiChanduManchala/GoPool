/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Navbar = () => {
  
  return (
    <div class="navbar">
          <div class="nav-logo">
            <label class="nav-logo-text" for="toogle"><h1>GoPool</h1></label>
          </div>
          <input type="checkbox" id="toogle" />
          <div class="navlinks">
            <a href="#home" class="navlink">Home</a>
            <a href="#Appp" class="navlink">App</a>
            <a href="#About" class="navlink">About</a>
            <a href="#Team" class="navlink">Team</a>
            <a href="#Feedback" class="navlink">Feedback</a>
            <a href="#Contact" class="navlink">Contact</a>
          </div>
        </div>
  );
};

export default Navbar;
