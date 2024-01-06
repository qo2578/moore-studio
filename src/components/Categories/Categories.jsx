import React from "react";
import "./style.css";
import img1 from "../../images/topCategories/img1.png";
import img2 from "../../images/topCategories/img2.png";
import img3 from "../../images/topCategories/img3.png";
import img4 from "../../images/topCategories/img4.png";
import img5 from "../../images/topCategories/img5.png";
import img6 from "../../images/topCategories/img6.png";

const Categories = () => {
  const categoriesData = [
    {
      title: "Ванны",
      description: "3000 товаров",
      image: img1,
    },
    {
      title: "Смесители",
      description: "3000 товаров",
      image: img2,
    },
    {
      title: "Вытяжки для кухни",
      description: "3000 товаров",
      image: img3,
    },
    {
      title: "Кухонные мойки",
      description: "3000 товаров",
      image: img4,
    },
    {
      title: "Другие",
      description: "3000 товаров",
      image: img5,
    },
    {
      title: "Ванны",
      description: "3000 товаров",
      image: img6,
    },
    {
      title: "Вытяжки для кухни",
      description: "3000 товаров",
      image: img3,
    },
    {
      title: "Унитазы",
      description: "3000 товаров",
      image: img6,
    },
    {
      title: "Смесители",
      description: "3000 товаров",
      image: img2,
    },
    {
      title: "Ванны",
      description: "3000 товаров",
      image: img1,
    },
    {
      title: "Унитазы",
      description: "3000 товаров",
      image: img6,
    },
    {
      title: "Другие",
      description: "3000 товаров",
      image: img5,
    },
    // ... остальные элементы массива
  ];
  return (
    <div className="categories">
      <h2 className="title">Категории</h2>
      <a href="" className="categories-box">
        {categoriesData.map((item, index) => (
          <div key={index} className="categories-block">
            <div className="categories-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <img src={item.image} alt={`Изображение ${index + 1}`} />
          </div>
        ))}
      </a>
    </div>
  );
};

export default Categories;
