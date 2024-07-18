import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import "./Gallery.css";

const images = [
  { id: 1, src: "/src/assets/Image/1.jpg", alt: "Image 1" },
  { id: 2, src: "/src/assets/Image/2.jpg", alt: "Image 2" },
  { id: 3, src: "/src/assets/Image/3.jpg", alt: "Image 3" },
  { id: 4, src: "/src/assets/Image/4.jpg", alt: "Image 4" },
  { id: 5, src: "/src/assets/Image/5.jpg", alt: "Image 5" },
  { id: 6, src: "/src/assets/Image/6.jpg", alt: "Image 6" },
  { id: 7, src: "/src/assets/Image/7.jpg", alt: "Image 7" },
  { id: 8, src: "/src/assets/Image/8.jpg", alt: "Image 8" },
  { id: 9, src: "/src/assets/Image/9.jpg", alt: "Image 9" },
  { id: 10, src: "/src/assets/Image/10.jpg", alt: "Image 10" },
  { id: 11, src: "/src/assets/Image/11.jpg", alt: "Image 11" },
  { id: 12, src: "/src/assets/Image/12.jpg", alt: "Image 12" },
  { id: 13, src: "/src/assets/Image/13.jpg", alt: "Image 13" },
  { id: 14, src: "/src/assets/Image/14.jpg", alt: "Image 14" },
  { id: 15, src: "/src/assets/Image/15.jpg", alt: "Image 15" },
  { id: 16, src: "/src/assets/Image/16.jpg", alt: "Image 16" },
  { id: 17, src: "/src/assets/Image/17.jpg", alt: "Image 17" },
  { id: 18, src: "/src/assets/Image/18.jpg", alt: "Image 18" },
  { id: 19, src: "/src/assets/Image/19.jpg", alt: "Image 19" },
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
