import React from "react";
import Slider from "react-slick";
import "./News.css";
import news1 from "/src/assets/images/1.jpg";
import news2 from "/src/assets/images/2.jpg";
import news3 from "/src/assets/images/3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsCarousel = () => {
  const newsData = [
    {
      title: "Conducted orientation program for Mar Baselios Public School",
      dateFull: "July 19, 2024",
      description:
        "Kerala: we launched the school orientation progtram at Mar Baselios Public School, Devalokam, Kottayam. As it was an initial stage of the program we chose to have a talk session with 8th grade students. Their approach to the program was remarkable that made us to talk more about the tech trends of 21st century. The talk comprised of Quantum computing, nanotechnology, and more. We even explained our project on CANSAT and Elephant Deterrent System, and how they can achieve these kind of projects from intermediate level of education. The talk session was conducted by Asif Muhammad Sadhik and Edwin K Jayesh.",
      image: news1,
      link: "#news1", // Add a link for each news item
    },
    {
      title: "Registered for IN-SPACe CANSAT India Student Competition 2024-25 (2nd Edition)",
      dateFull: "June 30, 2024",
      description:
        "Bengaluru: we are delighted to announce that we have registered for IN-SPACe CANSAT India Student Competition 2024-25 (2nd Edition). This will be a major stepping stone for our CANSAT projects. As they have provided mission requirements for the project we will analysing to make this system more eco-friendly and future proof. We will keep it updated in future.",
      image: news2,
      link: "#news2", // Add a link for each news item
    },
    // {
    //   title: "Heading Will Be Here",
    //   dateFull: "Sep 19, 2020",
    //   description:
    //     "Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aspernatur reprehenderit velit est voluptatum, voluptas amet quasi dicta consectetur.",
    //   image: news3,
    //   link: "#news3", // Add a link for each news item
    // },
    // Add more news data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="news-container">
<h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-8">
News</h1>
      <Slider {...settings}>
        {newsData.map((news, index) => (
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
                
              </ul>
              <p>{news.description}</p>
              <a href={news.link}>Read More...</a>{" "}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
