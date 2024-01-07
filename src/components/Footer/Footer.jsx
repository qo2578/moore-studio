import React from "react";
import "./style.css";
import logo from "../../images/logo.svg";
import btn1 from "../../images/footer/btn1.svg";
import btn2 from "../../images/footer/btn2.svg";
import whatsapp from "../../images/footer/whatsapp.svg";
import inst from "../../images/footer/inst.svg";
import facebook from "../../images/footer/facebook.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="" />
          <p>
            Первый отечественный бренд Iskender на рынке сантехники от компании
            ОсОО «Стройдом.кг»
          </p>
          <div className="footer-btns">
            <a href="">
              <img src={btn1} alt="" />
            </a>
            <a href="">
              <img src={btn2} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-col one">
            <h3>Адреса</h3>
            <div className="footer-col-box">
              ЭлитСтрой
              <p>ул. Ден-Сяопина 18/1</p>
            </div>
            <div className="footer-col-box">
              Баткен <p>ул. Льва-Толстого 19</p>
            </div>
            <div className="footer-col-box">
              ТааТан <p>ул. Лермонтова 6</p>
            </div>
          </div>
          <div className="footer-col">
            <h3>Компания</h3>
            <div className="footer-col-box">Каталог </div>
            <div className="footer-col-box">Избранное </div>
            <div className="footer-col-box">Личный кабинет </div>
          </div>
          <div className="footer-col">
            <h3>Контакты</h3>
            <div className="footer-col-box">
              Email:
              <p>iskender.kg@gmail.com</p>
            </div>
            <div className="footer-col-box">
              Телефон:{" "}
              <p className="footer-col-box-tel">
                +996 (500) 000-104 <br />
                +996 (997) 000-104 <br />
                +996 (222) 000-104
              </p>
            </div>
            <a href="">
              <img src={whatsapp} alt="" />
            </a>
          </div>{" "}
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom">
        © 2023 Iskender.kg - Отечественный бренд сантехники
        <div className="footer-bottom-box">
          <a href="">
            <img src={inst} alt="" />
          </a>
          <a href="">
            <img src={facebook} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
