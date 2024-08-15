import React, { useState, useEffect } from "react";
import Masonry from "react-responsive-masonry";
import "./Gallery.css";

import img1 from "/src/assets/Gallery/img1.jpeg";
import img2 from "/src/assets/Gallery/img2.jpeg";
import img3 from "/src/assets/Gallery/img3.jpeg";
import img4 from "/src/assets/Gallery/img4.jpeg";
import img5 from "/src/assets/Gallery/img5.jpeg";
import img6 from "/src/assets/Gallery/img6.jpeg";
import img7 from "/src/assets/Gallery/img7.jpeg";
import team from "/src/assets/Gallery/team.jpeg";
import img8 from "/src/assets/Gallery/img8.jpeg";
import img9 from "/src/assets/Gallery/img9.jpeg";
import img10 from "/src/assets/Gallery/img10.jpeg";

import prevIcon from "/src/assets/prev.svg";
import nextIcon from "/src/assets/next.svg";
import backIcon from "/src/assets/back.svg";

const photo = [
  {
    id: 1,
    images: [img8, img7, team, img3, img4, img6],
  },
];

const albums = [
  {
    id: 1,
    name: "Team",
    images: [team, img8, img10],
  },
  {
    id: 2,
    name: "Orientation",
    images: [img1, img2, img3, img4, img5, img6],
  },
  {
    id: 3,
    name: "Works",
    images: [img9],
  },
];

const Gallery = () => {
  const [isAlbumPopupOpen, setIsAlbumPopupOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    if (isAlbumPopupOpen) {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScroll}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPosition);
    }
  }, [isAlbumPopupOpen]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setSelectedImage(album.images[0]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleNextPrev = (direction) => {
    const currentIndex = selectedAlbum.images.indexOf(selectedImage);
    const newIndex =
      (currentIndex + direction + selectedAlbum.images.length) %
      selectedAlbum.images.length;
    setSelectedImage(selectedAlbum.images[newIndex]);
  };

  const handleClosePopup = () => {
    setIsAlbumPopupOpen(false);
    setSelectedAlbum(null);
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container" id="gallery">
      <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl mb-4">
        Gallery
      </h1>
      <Masonry columnsCount={2} gutter="10px" className="gallery">
        {photo[0].images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-item"
          />
        ))}
      </Masonry>

      <button className="gallery-btn" onClick={() => setIsAlbumPopupOpen(true)}>
        See More
      </button>

      {isAlbumPopupOpen && (
        <div className="album-popup">
          <span className="album-popup-close" onClick={handleClosePopup}>
            &times;
          </span>
          <div className="album-popup-content">
            {selectedAlbum && selectedImage ? (
              <div className="album-modal">
                <img
                  src={prevIcon}
                  className="prev"
                  onClick={() => handleNextPrev(-1)}
                  alt="Previous"
                />

                <img
                  src={selectedImage}
                  alt={selectedAlbum.name}
                  className="album-modal-content"
                />
                <img
                  src={nextIcon}
                  className="next"
                  onClick={() => handleNextPrev(1)}
                  alt="Next"
                />

                <div className="thumbnails">
                  {selectedAlbum.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`thumbnail ${
                        image === selectedImage ? "active" : ""
                      }`}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>

                {/* Back Button */}
                <img
                  src={backIcon}
                  className="back-icon"
                  alt="Back"
                  onClick={() => setSelectedImage(null)}
                />
              </div>
            ) : (
              <div className="albums-grid-container">
                <div className="albums-grid">
                  {albums.map((album) => (
                    <div
                      key={album.id}
                      className="album-item"
                      onClick={() => handleAlbumClick(album)}
                    >
                      <h2>{album.name}</h2>
                      <img src={album.images[0]} alt={album.name} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
