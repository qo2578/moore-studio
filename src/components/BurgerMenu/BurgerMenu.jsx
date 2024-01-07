import React from 'react'
import "./style.css";

const BurgerMenu = ({ isOpen, toggleMenu }) => {

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
    <div className="burger-icon" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className="menu-items">
      <a href="/" onClick={toggleMenu}>
        Item 1
      </a>
      <a href="/" onClick={toggleMenu}>
        Item 2
      </a>
      <a href="/" onClick={toggleMenu}>
        Item 3
      </a>
    </div>
  </div>
  )
}

export default BurgerMenu