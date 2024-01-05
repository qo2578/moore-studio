import React from 'react'
import './style.css';
import photo1 from '../../images/categories/photo1.png'



const TopCategories = () => {
  const topCategoriesData = [
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Акции',
    },
    {
      image: photo1,
      text: 'Распродажа',
    },
    {
      image: photo1,
      text: 'Подарки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo1,
      text: 'Скидки',
    },

  ];
  return (
    <div className='top-categories'>
      {topCategoriesData.map((data, index) => (
        <div key={index} className='top-categories-box'>
          <img src={data.image} alt={`Изображение ${index + 1}`} />
          <p>{data.text}</p>
        </div>
      ))}
    </div>

  )
}

export default TopCategories