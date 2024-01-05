import React from "react";
import "./style.css";
import ava from "../../images/adresses/ava.svg";
import arrow from "../../images/adresses/arrow.svg";
import location from "../../images/adresses/location.svg";
import clock from "../../images/adresses/clock.svg";
import phone from "../../images/adresses/phone.svg";


const Address = () => {
  const cardsData = [
    {
      id: 1,
      topLeftImage: ava,
      topWord: "Iskender home",
      topLink: "открыть в карте",
      topRightLinkImage: arrow,
      bottomLeftImage: clock,
      bottomLeftWord: "08:00 - 22:00",
      bottomRightImage: phone,
      bottomRightWord: "+996 500 345 345",
      bottomTopImage: location,
      bottomTopWord: "Кыргызстан, г. Бишкек ул. Турусбекова A167",
    },
    {
      id: 2,
      topLeftImage: ava,
      topWord: "Iskender home",
      topLink: "открыть в карте",
      topRightLinkImage: arrow,
      bottomLeftImage: clock,
      bottomLeftWord: "08:00 - 22:00",
      bottomRightImage: phone,
      bottomRightWord: "+996 500 345 345",
      bottomTopImage: location,
      bottomTopWord: "Кыргызстан, г. Бишкек ул. Лермонтова 6",
    },
    {
      id: 3,
      topLeftImage: ava,
      topWord: "Iskender home",
      topLink: "открыть в карте",
      topRightLinkImage: arrow,
      bottomLeftImage: clock,
      bottomLeftWord: "08:00 - 22:00",
      bottomRightImage: phone,
      bottomRightWord: "+996 500 345 345",
      bottomTopImage: location,
      bottomTopWord: "Кыргызстан, г. Бишкек ул. Льва-Толстого 19",
    },
    // Добавьте данные для других карточек по аналогии
  ];
  return (
    <div className="cards-box">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <div className="top-section">
            <div className="top-left">
              <img src={card.topLeftImage} alt="Top Left" />
              <div className="top-left-box">
                <p>{card.topWord}</p>
                <a href={card.topLink}>{card.topLink}</a>
              </div>
            </div>
            <div className="top-right">
              <a href={card.topRightLinkImage}>
                <img src={card.topRightLinkImage} alt="Top Right" />
              </a>
            </div>
          </div>
          <div className="card-line"></div>
          <div className="bottom-section">
            <div className="bottom-top">
              <img src={card.bottomTopImage} alt="Bottom Left" />
              <p>{card.bottomTopWord}</p>
            </div>
            <div className="bottom-bottom">
              <div className="bottom-left">
                <img src={card.bottomLeftImage} alt="Bottom Right" />
                <p>{card.bottomLeftWord}</p>
              </div>
              <div className="bottom-right">
                <img src={card.bottomRightImage} alt="Bottom Right" />
                <p>{card.bottomRightWord}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Address;
