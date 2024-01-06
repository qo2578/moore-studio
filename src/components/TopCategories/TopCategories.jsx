import React from 'react'
import './style.css';
import photo1 from '../../images/categories/photo1.png'
import photo2 from '../../images/categories/photo2.png'
import photo3 from '../../images/categories/photo3.png'
import photo4 from '../../images/categories/photo4.png'
import photo5 from '../../images/categories/photo5.png'
import photo from '../../images/categories/photo.png'



const TopCategories = () => {
  const topCategoriesData = [
    {
      image: photo1,
      text: 'Скидки',
    },
    {
      image: photo2,
      text: 'Акции',
    },
    {
      image: photo3,
      text: 'Распродажа',
    },
    {
      image: photo4,
      text: 'Подарки',
    },
    {
      image: photo5,
      text: 'Подарки',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },
    {
      image: photo,
      text: 'Другое',
    },

  ];
  return (
    <a href='' className='top-categories'>
      {topCategoriesData.map((data, index) => (
        <div key={index} className='top-categories-box'>
          <img src={data.image} alt={`Изображение ${index + 1}`} />
          <p>{data.text}</p>
        </div>
      ))}
    </a>

  )
}

export default TopCategories