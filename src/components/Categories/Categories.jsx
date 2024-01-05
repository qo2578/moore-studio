import React from "react";
import "./style.css";
import img1 from '../../images/topCategories/img1.png'

const Categories = () => {
    const categoriesData = [
        {
          title: 'Ванны',
          description: '3000 товаров',
          image: img1,
        },
        {
          title: 'Ванны',
          description: '3000 товаров',
          image: img1,
        },
        {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
          {
            title: 'Ванны',
            description: '3000 товаров',
            image: img1,
          },
        // ... остальные элементы массива
      ];
  return (
    <div className="categories">
    <h2 className="title">Категории</h2>
    <div className="categories-box">
      {categoriesData.map((item, index) => (
        <div key={index} className="categories-block">
          <div className="categories-text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          <img
            src={item.image}
            alt={`Изображение ${index + 1}`}
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Categories;
