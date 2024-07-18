import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
    const banners = [
      {
        id: 1,
        image:
          "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
        altText: "Banner 1",
        caption: "Caption for Banner 1",
      },
      {
        id: 2,
        image:
          "https://assets.myntassets.com/w_623,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg",
        altText: "Banner 2",
        caption: "Caption for Banner 2",
      },
      {
        id: 3,
        image:
          "https://assets.myntassets.com/w_623,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
        altText: "Banner 3",
        caption: "Caption for Banner 3",
      },
      // {
      //   id: 3,
      //   image:
      //     "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg",
      //   altText: "Banner 4",
      //   caption: "Caption for Banner 4",
      // },

      // {
      //   id: 5,
      //   image:
      //     "https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg",
      //   altText: "Banner 5",
      //   caption: "Caption for Banner 5",
      // },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [banners.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="banner-container">
        <div className="carousel">
            <button onClick={goToPrevious} className="carousel-control prev">&lt;</button>
            <div className="carousel-slides">
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={banner.image} alt={banner.altText} />
                        {/* <div className="carousel-caption">{banner.caption}</div> */}
                    </div>
                ))}
            </div>
            <button onClick={goToNext} className="carousel-control next">&gt;</button>
            <div className="carousel-dots">
                {banners.map((banner, index) => (
                    <span
                        key={banner.id}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Banner;
