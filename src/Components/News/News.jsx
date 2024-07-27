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
    <div className="newscontainer" id="news">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-4">
        News & Updates{" "}
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
          <h1 className="text-1xl font-semibold text-center text-gray-500 capitalize lg:text-2xl dark:text-black mb-4">
            Our Latest News{" "}
          </h1>{" "}
          <p className="news-description">
            Want to know what’s new? We’ve got exciting updates! Click See More
            to dive into the latest news and happenings.
          </p>
          <a href="https://www.tumblr.com/blog/tessat-space" target="blank">
            <button className="news-btn">See More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
