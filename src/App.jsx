import ProductCard from "./components/ProductCard/ProductCard";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import TopCategories from "./components/TopCategories/TopCategories";
import Stock from "./components/Stock/Stock";
import Address from "./components/Address/Address";
import Footer from "./components/Footer/Footer";
import "./index.css";
import img1 from "../src/images/bestsellers/img1.png";
import banner from "../src/images/news/banner.svg";
import banner1 from "../src/images/news/banner1.svg";
import React from "react";

const App = () => {
  const productData = [
    {
      id: 1,
      image: img1,
      description:
        "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
      price: "1294 с",
      inStock: true,
    },
    {
      id: 2,
      image: img1,
      description: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      inStock: true,
    },
    {
      id: 3,
      image: img1,
      description: "Держатель для лейки ",
      price: "1294 с",
      inStock: true,
    },
    {
      id: 4,
      image: img1,
      description: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      inStock: true,
    },
    {
      id: 5,
      image: img1,
      description: "Держатель для лейки BOOU PG605 ",
      price: "1294 с",
      inStock: true,
    },
    {
      id: 6,
      image: img1,
      description:
        "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
      price: "1294 с",
      inStock: true,
    },
    {
      id: 7,
      image: img1,
      description: "BOOU PG605 Держатель для лейки BOOU PG605..",
      price: "1294 с",
      inStock: true,
    },
    {
      id: 8,
      image: img1,
      description: "Держатель для лейки  Держатель для лейки BOOU PG605..",
      price: "1294 с",
      inStock: true,
    },
    // Добавьте дополнительные товары по аналогии
  ];

  return (
    <body>
      <Header />
      <main>
        <section>
          {" "}
          <TopCategories />
        </section>
        <section>
          {" "}
          <Categories />
        </section>
        <section className="bestsellers">
          <div className="text-box">
            <h2 className="title">Хиты продаж</h2>
            <a href="" className="text-link">
              перейти в каталог
            </a>
          </div>
          <div className="bestsellers-box">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className="news">
          <div className="text-box">
            <h2 className="title">Новости</h2>
            <a href="" className="text-link">
              все
            </a>
          </div>
          <div className="news-box">
            {" "}
            <a href="" className="news-link">
              <img src={banner} alt="" />
            </a>
            <a href="" className="news-link">
              <img src={banner} alt="" />
            </a>
            <a href="" className="news-link">
              <img src={banner1} alt="" />
            </a>
          </div>
        </section>
        <section className="action">
          <div className="text-box">
            <h2 className="title">Аукционные товары</h2>
            <a href="" className="text-link">
              перейти в каталог
            </a>
          </div>
          <div className="bestsellers-box">
            {productData.map((product) => (
              <Stock key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className="addresses">
          <div className="text-box">
            <h2 className="title">Адреса магазинов</h2>
            <a href="" className="text-link">
              все
            </a>
          </div>
              <Address />
        </section>
      </main>
      <Footer/>
    </body>
  );
};

export default App;
