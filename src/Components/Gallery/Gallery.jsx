import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import "./Gallery.css";

import img1 from "/src/assets/Gallery/img1.jpeg";
import img2 from "/src/assets/Gallery/img2.jpeg";
import img3 from "/src/assets/Gallery/img3.jpeg";
import img4 from "/src/assets/Gallery/img4.jpeg";
import img5 from "/src/assets/Gallery/img5.jpeg";
import img6 from "/src/assets/Gallery/img6.jpeg";
import img7 from "/src/assets/Gallery/img7.jpeg";

const images = [
  // { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img3, alt: "Image 3" },
  { id: 4, src: img4, alt: "Image 4" },
  // { id: 5, src: img5, alt: "Image 5" },
  { id: 6, src: img7, alt: "Image 6" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container" id="gallery">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-4">
        Gallery{" "}
      </h1>
      <Masonry columnsCount={2} gutter="10px" className="gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </Masonry>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="modal-close">&times;</span>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="modal-content"
          />
        </div>
      )}
      <button className="gallery-btn">
        <a href="/gallery.html" rel="noopnernore">See More</a>
      </button>
    </div>
  );
};

export default Gallery;
