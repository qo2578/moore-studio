import React from "react";
import "./style.css";
import logo from "../../images/logo.svg";
import categoriesBtn from "../../images/categories-btn.svg";
import search from "../../images/search.svg";
import profileImg from "../../images/profile-img.svg";
import cartImg from "../../images/cart-img.svg";


const Header = () => {
  return (
    <header className="header">
            <img src={logo} alt="logo" />
      <button className="header-btn">
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
        <img src={cartImg} alt="" className="cart-img"/>
      </div>
    </header>
  );
};

export default Header;
