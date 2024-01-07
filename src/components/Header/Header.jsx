import "./style.css";
import logo from "../../images/logo.svg";
import categoriesBtn from "../../images/categories-btn.svg";
import search from "../../images/search.svg";
import profileImg from "../../images/profile-img.svg";
import cartImg from "../../images/cart-img.svg";
import menuOn from "../../images/menuOn.svg";
import menuOff from "../../images/menuOff.svg";
import React, { useState } from "react";

const Header = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    console.log("Toggle burger menu");
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    console.log("Close burger menu");
    setBurgerMenuOpen(false);
  };
  return (
    <header className={`header ${burgerMenuOpen ? "burger-menu-open" : ""}`}>
      {" "}
      <img src={logo} alt="logo" />
      {/* Навигация для больших экранов */}
      <div className="nav">
      <button className="header-catalog-btn">
        <img src={categoriesBtn} alt="categories-btn" />
        Каталог
      </button>
      <div className="header-search">
        <img src={search} alt="search" />
        <input
          type="text"
          id="searchInput"
          placeholder="Поиск"
          className="search-input"
        />
      </div>
      <div className="header-text">
        Добро пожаловать
        <span>Вход/Регистрация</span>
      </div>
      <div className="header-cart">
        <img src={profileImg} alt="" className="profile-img" />
        <div className="header-line"></div>
        <img src={cartImg} alt="" className="cart-img" />
      </div>
      </div>

      <div
        className={`burger-menu-btn ${burgerMenuOpen ? "open" : ""}`}
        onClick={toggleBurgerMenu}
      >
        <img src={menuOn} alt="search" />
      </div>
      <div
        className={`burger-menu ${burgerMenuOpen ? "visible" : ""} ${
          burgerMenuOpen ? "burger-menu-opening" : "burger-menu-closing"
        }`}
      >          <img src={menuOff} alt="search" onClick={closeBurgerMenu}/>
        <div className="burger-menu-b">

          <div className="burger-menu-box">
            <div className="header-search">
              <img src={search} alt="search" />
              <input
                type="text"
                id="searchInput"
                placeholder="Поиск"
                className="search-input"
              />
            </div>
            <div className="header-text">
              Добро пожаловать
              <span>Вход/Регистрация</span>
            </div>
            <button className="header-catalog-btn" onClick={closeBurgerMenu}>
              <img src={categoriesBtn} alt="categories-btn" />
              Каталог
            </button>

            <div className="header-cart" onClick={closeBurgerMenu}>
              <img src={profileImg} alt="" className="profile-img" />
              <div className="header-line"></div>
              <img src={cartImg} alt="" className="cart-img" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
