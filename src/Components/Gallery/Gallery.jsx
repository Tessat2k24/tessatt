import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import "./Gallery.css";
import img1 from "/src/assets/Image/1.jpg";
import img2 from "/src/assets/Image/2.jpg";
import img3 from "/src/assets/Image/3.jpg";
import img4 from "/src/assets/Image/4.jpg";
import img5 from "/src/assets/Image/5.jpg";
import img6 from "/src/assets/Image/6.jpg";
import img7 from "/src/assets/Image/7.jpg";
import img8 from "/src/assets/Image/8.jpg";
import img9 from "/src/assets/Image/9.jpg";
import img10 from "/src/assets/Image/10.jpg";
const images = [
  { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img3, alt: "Image 3" },
  { id: 4, src: img4, alt: "Image 4" },
  { id: 5, src: img5, alt: "Image 5" },
  { id: 6, src: img6, alt: "Image 6" },
  { id: 7, src: img7, alt: "Image 7" },
  { id: 8, src: img8, alt: "Image 8" },
  { id: 9, src: img9, alt: "Image 9" },
  { id: 10, src: img10, alt: "Image 10" },
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
    <div>
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-5">
        Gallery{" "}
      </h1>
      <Masonry columnsCount={3} gutter="10px" className="gallery">
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
    </div>
  );
};

export default Gallery;
