import React, { useState, useEffect } from "react";
import Masonry from "react-responsive-masonry";
import "./Gallery.css";

// IMPORTS FOR TEAM GALLERY
import team_img2 from "./Gallery-images/Team/img2.jpeg";
import team_img1 from "./Gallery-images/Team/img1.jpeg";
import team_img3 from "./Gallery-images/Team/img3.jpeg";

// IMPORTS FOR WORKS GALLERY
import work_img1 from "./Gallery-images/Works/img1.jpeg";

// IMPORTS FOR MEETINGS GALLERY
import Meetings_img1 from "./Gallery-images/Meetings/img1.jpeg";

// IMPORTS FOR ORIENTATIONS GALLERY

// MAR BASELIOS SCHOOL GALLERY
import baselios_img1 from "./Gallery-images/Mar Baselios/img1.jpeg";
import baselios_img2 from "./Gallery-images/Mar Baselios/img2.jpeg";
import baselios_img3 from "./Gallery-images/Mar Baselios/img3.jpeg";
import baselios_img4 from "./Gallery-images/Mar Baselios/img4.jpeg";
import baselios_img5 from "./Gallery-images/Mar Baselios/img5.jpeg";
import baselios_img6 from "./Gallery-images/Mar Baselios/img6.jpeg";

// SYNDUSMOS SCHOOL GALLERY
import syndesmos_img1 from "./Gallery-images/Syndesmos/img1.jpg";
import syndesmos_img2 from "./Gallery-images/Syndesmos/img2.jpg";
import syndesmos_img3 from "./Gallery-images/Syndesmos/img3.jpg";
import syndesmos_img4 from "./Gallery-images/Syndesmos/img4.jpg";
import syndesmos_img5 from "./Gallery-images/Syndesmos/img5.jpg";
import syndesmos_img6 from "./Gallery-images/Syndesmos/img6.jpg";

// PANGADA SCHOOL GALLERY
import Pangada_img1 from "./Gallery-images/Pangada/img1.jpg";
import Pangada_img2 from "./Gallery-images/Pangada/img2.jpg";
import Pangada_img3 from "./Gallery-images/Pangada/img3.jpg";
import Pangada_img4 from "./Gallery-images/Pangada/img4.jpg";
import Pangada_img5 from "./Gallery-images/Pangada/img5.jpg";
import Pangada_img6 from "./Gallery-images/Pangada/img6.jpg";
import Pangada_img7 from "./Gallery-images/Pangada/img7.jpg";
import Pangada_img8 from "./Gallery-images/Pangada/img8.jpg";
import Pangada_img9 from "./Gallery-images/Pangada/img9.jpg";
import Pangada_img10 from "./Gallery-images/Pangada/img10.jpg";
import Pangada_img11 from "./Gallery-images/Pangada/img11.jpg";
import Pangada_img12 from "./Gallery-images/Pangada/img12.jpg";
import Pangada_img13 from "./Gallery-images/Pangada/img13.jpg";
import Pangada_img14 from "./Gallery-images/Pangada/img14.jpg";
import Pangada_img15 from "./Gallery-images/Pangada/img15.jpg";

// MST GALLERY
import MST_img1 from "./Gallery-images/MST/img1.jpg";
import MST_img2 from "./Gallery-images/MST/img2.jpg";
import MST_img3 from "./Gallery-images/MST/img3.jpg";
import MST_img4 from "./Gallery-images/MST/img4.jpg";
import MST_img5 from "./Gallery-images/MST/img5.jpg";
import MST_img6 from "./Gallery-images/MST/img6.jpg";
import MST_img7 from "./Gallery-images/MST/img7.jpg";
import MST_img8 from "./Gallery-images/MST/img8.jpg";
import MST_img9 from "./Gallery-images/MST/img9.jpg";
import MST_img10 from "./Gallery-images/MST/img10.jpg";
import MST_img11 from "./Gallery-images/MST/img11.jpg";
import MST_img12 from "./Gallery-images/MST/img12.jpg";
import MST_img13 from "./Gallery-images/MST/img13.jpg";
import MST_img14 from "./Gallery-images/MST/img14.jpg";
import MST_img15 from "./Gallery-images/MST/img15.jpg";
import MST_img16 from "./Gallery-images/MST/img16.jpg";
import MST_img17 from "./Gallery-images/MST/img17.jpg";
import MST_img18 from "./Gallery-images/MST/img18.jpg";
import MST_img19 from "./Gallery-images/MST/img19.jpg";
import MST_img20 from "./Gallery-images/MST/img20.jpg";
import MST_img21 from "./Gallery-images/MST/img21.jpg";
import MST_img22 from "./Gallery-images/MST/img22.jpg";
import MST_img23 from "./Gallery-images/MST/img23.jpg";
import MST_img24 from "./Gallery-images/MST/img24.jpg";

//KV Gallery
import KV_img1 from "./Gallery-images/KV/img1.jpg";
import KV_img2 from "./Gallery-images/KV/img2.jpg";
import KV_img3 from "./Gallery-images/KV/img3.jpg";
import KV_img4 from "./Gallery-images/KV/img4.jpg";
import KV_img5 from "./Gallery-images/KV/img5.jpg";
import KV_img6 from "./Gallery-images/KV/img6.jpg";
import KV_img7 from "./Gallery-images/KV/img7.jpg";
import KV_img8 from "./Gallery-images/KV/img8.jpg";
import KV_img9 from "./Gallery-images/KV/img9.jpg";
import KV_img10 from "./Gallery-images/KV/img10.jpg";
import KV_img11 from "./Gallery-images/KV/img11.jpg";
import KV_img12 from "./Gallery-images/KV/img12.jpg";
import KV_img13 from "./Gallery-images/KV/img13.jpg";
import KV_img14 from "./Gallery-images/KV/img14.jpg";
import KV_img15 from "./Gallery-images/KV/img15.jpg";
import KV_img16 from "./Gallery-images/KV/img16.jpg";
import KV_img17 from "./Gallery-images/KV/img17.jpg";
import KV_img18 from "./Gallery-images/KV/img18.jpg";

// ST ALPHONSA COLLEGE GALLERY
import Alphonsa_img1 from "./Gallery-images/St Alphonsa College/img1.jpg";
import Alphonsa_img2 from "./Gallery-images/St Alphonsa College/img2.jpg";
import Alphonsa_img3 from "./Gallery-images/St Alphonsa College/img3.jpg";
import Alphonsa_img4 from "./Gallery-images/St Alphonsa College/img4.jpg";
import Alphonsa_img5 from "./Gallery-images/St Alphonsa College/img5.jpg";
import Alphonsa_img6 from "./Gallery-images/St Alphonsa College/img6.jpg";
import Alphonsa_img7 from "./Gallery-images/St Alphonsa College/img7.jpg";
import Alphonsa_img8 from "./Gallery-images/St Alphonsa College/img8.jpg";
import Alphonsa_img9 from "./Gallery-images/St Alphonsa College/img9.jpg";
import Alphonsa_img10 from "./Gallery-images/St Alphonsa College/img10.jpg";
import Alphonsa_img11 from "./Gallery-images/St Alphonsa College/img11.jpg";
import Alphonsa_img12 from "./Gallery-images/St Alphonsa College/img12.jpg";
import Alphonsa_img13 from "./Gallery-images/St Alphonsa College/img13.jpg";
import Alphonsa_img14 from "./Gallery-images/St Alphonsa College/img14.jpg";
import Alphonsa_img15 from "./Gallery-images/St Alphonsa College/img15.jpg";
import Alphonsa_img16 from "./Gallery-images/St Alphonsa College/img16.jpg";
import Alphonsa_img17 from "./Gallery-images/St Alphonsa College/img17.jpg";
import Alphonsa_img18 from "./Gallery-images/St Alphonsa College/img18.jpg";
import Alphonsa_img19 from "./Gallery-images/St Alphonsa College/img19.jpg";
import Alphonsa_img20 from "./Gallery-images/St Alphonsa College/img20.jpg";
import Alphonsa_img21 from "./Gallery-images/St Alphonsa College/img21.jpg";

// IMPORTS FOR satmodel GALLERY
import BSSmodel from "./Gallery-images//satmodel/BSS-model.jpg";
import satmodel_img1 from "./Gallery-images/satmodel/satmodel_img1.jpeg";
import satmodel_img2 from "./Gallery-images/satmodel/satmodel_img2.jpeg";
import satmodel_img3 from "./Gallery-images/satmodel/satmodel_img3.jpeg";
import satmodel_img4 from "./Gallery-images/satmodel/satmodel_img4.jpeg";
import satmodel_img5 from "./Gallery-images/satmodel/satmodel_img5.jpeg";
import satmodel_img6 from "./Gallery-images/satmodel/satmodel_img6.jpeg";
import satmodel_img7 from "./Gallery-images/satmodel/satmodel_img7.jpeg";
import satmodel_img8 from "./Gallery-images/satmodel/satmodel_img8.jpeg";
import satmodel_img9 from "./Gallery-images/satmodel/satmodel_img9.jpeg";
import satmodel_img10 from "./Gallery-images/satmodel/satmodel_img10.jpeg";
import satmodel_img11 from "./Gallery-images/satmodel/satmodel_img11.jpeg";


// IMPORTS FOR PREV AND NEXT ICONS
import prevIcon from "/src/assets/prev.svg";
import nextIcon from "/src/assets/next.svg";
import backIcon from "/src/assets/back.svg";



const albums = [
  {
    id: 1,
    name: "Sessions",
    subAlbums: [
      {
        id: 2,
        name: "Mar Baselios",
        images: [
          baselios_img1,
          baselios_img2,
          baselios_img3,
          baselios_img4,
          baselios_img5,
          baselios_img6,
        ],
        parentAlbum: 1, // Ensure parentAlbum is set
      },
      {
        id: 3,
        name: "Pangada",
        images: [
          Pangada_img1,
          Pangada_img2,
          Pangada_img3,
          Pangada_img4,
          Pangada_img5,
          Pangada_img6,
          Pangada_img7,
          Pangada_img8,
          Pangada_img9,
          Pangada_img10,
          Pangada_img11,
          Pangada_img12,
          Pangada_img13,
          Pangada_img14,
          Pangada_img15,
        ],
        parentAlbum: 1, // Ensure parentAlbum is set
      },
      {
        id: 4,
        name: "Syndesmos",
        images: [
          syndesmos_img1,
          syndesmos_img2,
          syndesmos_img3,
          syndesmos_img4,
          syndesmos_img5,
          syndesmos_img6,
        ],
        parentAlbum: 1, // Ensure parentAlbum is set
      },
      {
        id: 5,
        name: "MST",
        images: [
          MST_img1,
          MST_img2,
          MST_img3,
          MST_img4,
          MST_img5,
          MST_img6,
          MST_img7,
          MST_img8,
          MST_img9,
          MST_img10,
          MST_img11,
          MST_img12,
          MST_img13,
          MST_img14,
          MST_img15,
          MST_img16,
          MST_img17,
          MST_img18,
          MST_img19,
          MST_img20,
          MST_img21,
          MST_img22,
          MST_img23,
          MST_img24,
        ],
        parentAlbum: 1, // Ensure parentAlbum is set
      },
      {
        id: 6,
        name: "KV",
        images: [
          KV_img1,
          KV_img2,
          KV_img3,
          KV_img4,
          KV_img5,
          KV_img6,
          KV_img7,
          KV_img8,
          KV_img9,
          KV_img10,
          KV_img11,
          KV_img12,
          KV_img13,
          KV_img14,
          KV_img15,
          KV_img16,
          KV_img17,
          KV_img18,
        ],
        parentAlbum: 1, // Ensure parentAlbum is set
      },
      {
        id: 7,
        name: "St Alphonsa College pala",
        images: [
          Alphonsa_img1,
          Alphonsa_img2,
          Alphonsa_img3,
          Alphonsa_img4,
          Alphonsa_img5,
          Alphonsa_img6,
          Alphonsa_img7,
          Alphonsa_img8,
          Alphonsa_img9,
          Alphonsa_img10,
          Alphonsa_img11,
          Alphonsa_img12,
          Alphonsa_img13,
          Alphonsa_img14,
          Alphonsa_img15,
          Alphonsa_img16,
          Alphonsa_img17,
          Alphonsa_img18,
          Alphonsa_img19,
          Alphonsa_img20,
          Alphonsa_img21,
        ],
        parentAlbum: 1, // Ensure parentAlbum is set
      },
    ],
  },
  {
    id: 8,
    name: "Team",
    subAlbums: [
      {
        id: 9,
        name: "Team",
        images: [team_img1, team_img2, team_img3],
        parentAlbum: 8, // Ensure parentAlbum is set
      },
    ],
  },
  {
    id: 10,
    name: "Meetings",
    subAlbums: [
      {
        id: 11,
        name: "Meeting",
        images: [Meetings_img1],
        parentAlbum: 10, // Ensure parentAlbum is set
      },
    ],
  },
  {
    id: 13,
    name: "Works",
    subAlbums: [
      {
        id: 14,
        name: "Satellite Model Handovering",
        images: [
          satmodel_img5,
          BSSmodel,
          satmodel_img1,
          satmodel_img2,
          // satmodel_img3,
          satmodel_img4,
          satmodel_img6,
          // satmodel_img7,
          satmodel_img8,
          satmodel_img9,
          satmodel_img10,
          satmodel_img11,
        ],
        parentAlbum: 13, // Ensure parentAlbum is set
      },
      {
        id: 15,
        name: "Works",
        images: [work_img1],
        parentAlbum: 13, // Ensure parentAlbum is set
      },
    ],
  },
];
const Gallery = () => {
  const [isAlbumPopupOpen, setIsAlbumPopupOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const mainPageAlbums = albums.slice(0, 4); // Show only 4 albums on the main page

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowRight") {
          handleNextPrev(1); // Move to the next image
        } else if (e.key === "ArrowLeft") {
          handleNextPrev(-1); // Move to the previous image
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setSelectedImage(null); // Reset selected image when moving to sub-album
    setIsAlbumPopupOpen(true);
  };

  const handleSubAlbumClick = (subAlbum) => {
    setSelectedAlbum(subAlbum);
    setSelectedImage(subAlbum.images[0]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleNextPrev = (direction) => {
    if (selectedAlbum) {
      const currentIndex = selectedAlbum.images.indexOf(selectedImage);
      const newIndex =
        (currentIndex + direction + selectedAlbum.images.length) %
        selectedAlbum.images.length;
      setSelectedImage(selectedAlbum.images[newIndex]);
    }
  };

  const handleClosePopup = () => {
    setIsAlbumPopupOpen(false);
    setSelectedAlbum(null);
    setSelectedImage(null);
  };

  const handleBackButtonClick = () => {
    if (selectedImage) {
      setSelectedImage(null);
    } else if (selectedAlbum && selectedAlbum.subAlbums) {
      setSelectedAlbum(null);
    } else {
      handleClosePopup();
    }
  };

  const handleBackToSubAlbumClick = () => {
    if (selectedAlbum && selectedAlbum.parentAlbum) {
      const parentAlbum = albums.find(
        (album) => album.id === selectedAlbum.parentAlbum
      );
      setSelectedAlbum(parentAlbum);
      setSelectedImage(null);
    }
  };

  return (
    <div className="gallery-container" id="gallery">
      <h1 className="gallery-heading">Gallery </h1>

      <Masonry columnsCount={3} gutter="10px" className="gallery">
        {mainPageAlbums.map((album, index) => (
          <div
            key={index}
            className="album-item"
            onClick={() => handleAlbumClick(album)}
          >
            <img
              src={album.subAlbums[0].images[0]}
              alt={album.name}
              className="gallery-item"
            />
            <div className="galleryheadoverlay">
              <h2>{album.name}</h2>
            </div>
          </div>
        ))}
      </Masonry>

      <button className="gallery-btn" onClick={() => setIsAlbumPopupOpen(true)}>
        See More
      </button>

      {isAlbumPopupOpen && (
        <div className="album-popup">
          <button className="close-btn" onClick={handleClosePopup}>
            &times;
          </button>
          <div className="album-popup-content">
            {selectedImage ? (
              <div className="album-modal">
                <img
                  src={prevIcon}
                  className="prev"
                  onClick={() => handleNextPrev(-1)}
                  alt="Previous"
                />
                <img
                  src={selectedImage}
                  alt={selectedAlbum?.name}
                  className="album-modal-content"
                />
                <img
                  src={nextIcon}
                  className="next"
                  onClick={() => handleNextPrev(1)}
                  alt="Next"
                />
                <div className="thumbnails">
                  {selectedAlbum?.images.map((image, index) => (
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
                <img
                  src={backIcon}
                  className="back-icon"
                  alt="Back"
                  onClick={handleBackToSubAlbumClick}
                />
              </div>
            ) : selectedAlbum ? (
              <div className="albums-grid-container">
                <img
                  src={backIcon}
                  className="back-icon"
                  alt="Back"
                  onClick={handleBackButtonClick}
                />
                <div className="albums-grid">
                  {selectedAlbum.subAlbums.map((subAlbum) => (
                    <div
                      key={subAlbum.id}
                      className="album-item"
                      onClick={() => handleSubAlbumClick(subAlbum)}
                    >
                      <div className="galleryheadoverlay">
                        <h2>{subAlbum.name}</h2>{" "}
                      </div>
                      <img src={subAlbum.images[0]} alt={subAlbum.name} />
                    </div>
                  ))}
                </div>
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
                      <div className="galleryheadoverlay">
                        <h2>{album.name}</h2>
                      </div>
                      <img
                        src={album.subAlbums[0].images[0]}
                        alt={album.name}
                      />
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

