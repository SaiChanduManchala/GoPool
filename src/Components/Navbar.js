import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <a href="#">GoPool</a>
      </div>

      {/* Desktop Navbar */}
      <ul className={`${styles.navLinks} ${!isMobileMenuOpen ? styles.desktopMenu : ''}`}>
        <li><a href="#home" className="navlink" onClick={closeMobileMenu}>Home</a></li>
        <li><a href="#Appp" className="navlink" onClick={closeMobileMenu}>App</a></li>
        <li><a href="#About" className="navlink" onClick={closeMobileMenu}>About</a></li>
        <li><a href="#Team" className="navlink" onClick={closeMobileMenu}>Team</a></li>
        <li><a href="#Feedback" className="navlink" onClick={closeMobileMenu}>Feedback</a></li>
        <li><a href="#Contact" className="navlink" onClick={closeMobileMenu}>Contact</a></li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <ul className={`${styles.navLinks} ${styles.mobileMenu}`}>
          <li><a href="#home" className="navlink" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#Appp" className="navlink" onClick={closeMobileMenu}>App</a></li>
          <li><a href="#About" className="navlink" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#Team" className="navlink" onClick={closeMobileMenu}>Team</a></li>
          <li><a href="#Feedback" className="navlink" onClick={closeMobileMenu}>Feedback</a></li>
          <li><a href="#Contact" className="navlink" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
