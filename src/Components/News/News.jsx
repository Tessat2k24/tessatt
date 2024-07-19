import React, { useState } from "react";
import "./News.css";
import news1 from "/src/assets/images/1.jpg";
import news2 from "/src/assets/images/2.jpg";
import news3 from "/src/assets/images/3.jpg";
const NewsCarousel = () => {
  const newsData = [
    {
      title: "Heading Will Be Here",
      dateFull: "Sep 19, 2020",
      author: "Admin",
      description:
        "Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aspernatur reprehenderit velit est voluptatum, voluptas amet quasi dicta consectetur.",
      image: news1 ,
    },
    {
      title: "Headinrfrrfg Will Be Here",
      dateFull: "Sep 19, 2020",
      author: "Admin",
      description:
        "Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aspernatur reprehenderit velit est voluptatum, voluptas amet quasi dicta consectetur.",
      image: news2,
    },
    {
      title: "sssss Will Be Here",
      dateFull: "Sep 19, 2020",
      author: "Admin",
      description:
        "Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aspernatur reprehenderit velit est voluptatum, voluptas amet quasi dicta consectetur.",
      image: news3,
    },
    // Add more news data as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  };

    return (
      <div className="news-container">
        <h2 className="news-container-heading">News</h2>{" "}
        <div className="news-carousel">
          <button className="carousel-btn prev-btn" onClick={handlePrev}>
            ❮
          </button>
          <div className="news-slides">
            {newsData
              .slice(currentIndex, currentIndex + 3)
              .map((news, index) => (
                <div className="news-slide" key={index}>
                  <div className="news-image">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="news-content">
                    <h2>{news.title}</h2>
                    <ul>
                      <li>
                        <i className="fa fa-calendar"></i> {news.dateFull}
                      </li>
                      <li>
                        <i className="fa fa-user"></i> {news.author}
                      </li>
                    </ul>
                    <p>{news.description}</p>
                    <a href="#">Read More...</a>
                  </div>
                </div>
              ))}
          </div>
          <button className="carousel-btn next-btn" onClick={handleNext}>
            ❯
          </button>
        </div>
      </div>
    );
};

export default NewsCarousel;
