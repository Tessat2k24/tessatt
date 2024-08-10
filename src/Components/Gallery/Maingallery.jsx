import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Masonry from "react-responsive-masonry";
import styles from "./Maingallery.module.css"; // Import the CSS Module
import returnIcon from "./return.svg";
import img1 from "/src/assets/Gallery/img1.jpeg";
import img2 from "/src/assets/Gallery/img2.jpeg";
import img3 from "/src/assets/Gallery/img3.jpeg";
import img4 from "/src/assets/Gallery/img4.jpeg";
import img5 from "/src/assets/Gallery/img5.jpeg";
import img6 from "/src/assets/Gallery/img6.jpeg";
import img7 from "/src/assets/Gallery/img7.jpeg";

const images = [
  { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img3, alt: "Image 3" },
  { id: 4, src: img4, alt: "Image 4" },
  { id: 5, src: img5, alt: "Image 5" },
  { id: 6, src: img6, alt: "Image 6" },
  { id: 7, src: img7, alt: "Image 7" },
];

const Maingallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className= {styles.app}>
      {/* Navigation bar */}
      <div className={styles.nav}>
        <a href="/index.html">
          <img src={returnIcon} className={styles.returnIcon} />
          Return to Home
        </a>
      </div>

      {/* Gallery section */}
      <div className={styles.galleryContainer} id="gallery">
        <h1 className={styles.maingalleryTitle}>Gallery</h1>

        <Masonry columnsCount={3} gutter="10px" className={styles.gallery}>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={styles.galleryItem}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </Masonry>

        {/* Modal */}
        {selectedImage && (
          <div className={styles.modal} onClick={handleCloseModal}>
            <span className={styles.modalClose}>&times;</span>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.modalContent}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Maingallery;

ReactDOM.createRoot(document.getElementById("galleryroot")).render(
  <React.StrictMode>
    <Maingallery />
  </React.StrictMode>
);
