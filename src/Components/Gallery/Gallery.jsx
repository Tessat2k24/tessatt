import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import "./Gallery.css";

//Image Imports
import img1 from "/src/assets/Image/1.jpg"
import img2 from "/src/assets/Image/2.jpg";
import img3 from "/src/assets/Image/3.jpg";
import img4 from "/src/assets/Image/4.jpg";
import img5 from "/src/assets/Image/5.jpg";
import img6 from "/src/assets/Image/6.jpg";
import img7 from "/src/assets/Image/7.jpg";
import img8 from "/src/assets/Image/8.jpg";
import img9 from "/src/assets/Image/9.jpg";
import img10 from "/src/assets/Image/10.jpg";
import img11 from "/src/assets/Image/11.jpg";
import img12 from "/src/assets/Image/12.jpg";
import img13 from "/src/assets/Image/13.jpg";
import img14 from "/src/assets/Image/14.jpg";
import img15 from "/src/assets/Image/15.jpg";
import img16 from "/src/assets/Image/16.jpg";
import img17 from "/src/assets/Image/17.jpg";
import img18 from "/src/assets/Image/18.jpg";
import img19 from "/src/assets/Image/19.jpg";


const images = [
  { id: 1, src: { img1 }, alt: "Image 1" },
  { id: 2, src: { img2 }, alt: "Image 2" },
  { id: 3, src: { img3 }, alt: "Image 3" },
  { id: 4, src: { img4 }, alt: "Image 4" },
  { id: 5, src: { img5 }, alt: "Image 5" },
  { id: 6, src: { img6 }, alt: "Image 6" },
  { id: 7, src: { img7 }, alt: "Image 7" },
  { id: 8, src: { img8 }, alt: "Image 8" },
  { id: 9, src: { img9 }, alt: "Image 9" },
  { id: 10, src: { img10 }, alt: "Image 10" },
  { id: 11, src: { img11 }, alt: "Image 11" },
  { id: 12, src: { img12 }, alt: "Image 12" },
  { id: 13, src: { img13 }, alt: "Image 13" },
  { id: 14, src: { img14 }, alt: "Image 14" },
  { id: 15, src: { img15 }, alt: "Image 15" },
  { id: 16, src: { img16 }, alt: "Image 16" },
  { id: 17, src: { img17 }, alt: "Image 17" },
  { id: 18, src: { img18 }, alt: "Image 18" },
  { id: 19, src: { img19 }, alt: "Image 19" },
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
