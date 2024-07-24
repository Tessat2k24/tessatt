import React, { useEffect } from "react";
import "./News.css";

function News() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://assets.tumblr.com/post.js?_v=38df9a6ca7436e6ca1b851b0543b9f51";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="newscontainer"><h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        Our Works
      </h1>
    <div className="news-section">
      
      <div
        className="tumblr-post"
        data-href="https://embed.tumblr.com/embed/post/t:quL-fBKq2QR0yjIogq57hg/756810519223189504/v2"
        data-did="90c29ec7d949bcaf6432a9453e3581969009ad75"
      >
        <a href="https://www.tumblr.com/tessat-space/756810519223189504/meeting-with-mr-sheeju-chandran">
          https://www.tumblr.com/tessat-space/756810519223189504/meeting-with-mr-sheeju-chandran
        </a>
      </div>
      <div className="news-content">
        <h1 className="news-head">Our Latest News</h1>
        <p className="news-description">
          This is a brief description of the latest news. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <button className="news-btn">Read More</button>
      </div>
    </div>
    </div>
  );
}

export default News;
