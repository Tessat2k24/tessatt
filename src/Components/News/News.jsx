import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./News.css";

function News() {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Function to animate elements
    const animateElements = () => {

      gsap.fromTo(
        ".news-section",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".news-section",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    // Initialize animations
    animateElements();

    // Load Tumblr post script
    const script = document.createElement("script");
    script.src =
      "https://assets.tumblr.com/post.js?_v=38df9a6ca7436e6ca1b851b0543b9f51";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Kill any active animations on cleanup
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="newscontainer" id="news">
      <div className="news-header">
        <h1 className="vertical-heading2">News & Updates{" "}</h1>
      </div>
      <div className="news-section">
        <div
          className="tumblr-post"
          data-href="https://embed.tumblr.com/embed/post/t:quL-fBKq2QR0yjIogq57hg/762243503801729024/v2"
          data-did="9584cdf23888dfe3c7958536311b71df74a2e03e"
        >
          <a href="https://www.tumblr.com/tessat-space/762243503801729024/exciting-milestone-student-satellite-project">
            https://www.tumblr.com/tessat-space/762243503801729024/exciting-milestone-student-satellite-project
          </a>
        </div>
        <div className="news-content">
          <h1 className="text-1xl font-semibold text-center text-black capitalize lg:text-2xl mb-4">
            Our Latest News
          </h1>
          <p className="news-description">
            Want to know what’s new? We’ve got exciting updates! Click See More
            to dive into the latest news and happenings.
          </p>
          <a
            href="https://www.tumblr.com/blog/tessat-space"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="news-btn">See More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
