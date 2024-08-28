import React, { useState, useEffect } from "react";
import Masonry from "react-responsive-masonry";
import "./Gallery.css";

// IMPORTS FOR TEAM GALLERY
import team_img1 from "/src/assets/Gallery/Team/img1.jpeg";
import team_img2 from "/src/assets/Gallery/Team/img2.jpeg";
import team_img3 from "/src/assets/Gallery/Team/img3.jpeg";

// IMPORTS FOR WORKS GALLERY
import work_img1 from "/src/assets/Gallery/Works/img1.jpeg";

// IMPORTS FOR MEETINGS GALLERY
import Meetings_img1 from "/src/assets/Gallery/Meetings/img1.jpeg";

// IMPORTS FOR ORIENTATIONS GALLERY

// MAR BASELIOS SCHOOL GALLERY
import baselios_img1 from "/src/assets/Gallery/Mar Baselios/img1.jpeg";
import baselios_img2 from "/src/assets/Gallery/Mar Baselios/img2.jpeg";
import baselios_img3 from "/src/assets/Gallery/Mar Baselios/img3.jpeg";
import baselios_img4 from "/src/assets/Gallery/Mar Baselios/img4.jpeg";
import baselios_img5 from "/src/assets/Gallery/Mar Baselios/img5.jpeg";
import baselios_img6 from "/src/assets/Gallery/Mar Baselios/img6.jpeg";


// SYNDUSMOS SCHOOL GALLERY
import syndusmos_img1 from "/src/assets/Gallery/Syndusmos/img1.jpg";
import syndusmos_img2 from "/src/assets/Gallery/Syndusmos/img2.jpg";
import syndusmos_img3 from "/src/assets/Gallery/Syndusmos/img3.jpg";
import syndusmos_img4 from "/src/assets/Gallery/Syndusmos/img4.jpg";
import syndusmos_img5 from "/src/assets/Gallery/Syndusmos/img5.jpg";
import syndusmos_img6 from "/src/assets/Gallery/Syndusmos/img6.jpg";

// PANGADA SCHOOL GALLERY
import Pangada_img1 from "/src/assets/Gallery/Pangada/img1.jpg";
import Pangada_img2 from "/src/assets/Gallery/Pangada/img2.jpg";
import Pangada_img3 from "/src/assets/Gallery/Pangada/img3.jpg";
import Pangada_img4 from "/src/assets/Gallery/Pangada/img4.jpg";
import Pangada_img5 from "/src/assets/Gallery/Pangada/img5.jpg";
import Pangada_img6 from "/src/assets/Gallery/Pangada/img6.jpg";
import Pangada_img7 from "/src/assets/Gallery/Pangada/img7.jpg";
import Pangada_img8 from "/src/assets/Gallery/Pangada/img8.jpg";
import Pangada_img9 from "/src/assets/Gallery/Pangada/img9.jpg";
import Pangada_img10 from "/src/assets/Gallery/Pangada/img10.jpg";
import Pangada_img11 from "/src/assets/Gallery/Pangada/img11.jpg";
import Pangada_img12 from "/src/assets/Gallery/Pangada/img12.jpg";
import Pangada_img13 from "/src/assets/Gallery/Pangada/img13.jpg";
import Pangada_img14 from "/src/assets/Gallery/Pangada/img14.jpg";
import Pangada_img15 from "/src/assets/Gallery/Pangada/img15.jpg";

// MST GALLERY
import MST_img1 from "/src/assets/Gallery/MST/img1.jpg";
import MST_img2 from "/src/assets/Gallery/MST/img2.jpg";
import MST_img3 from "/src/assets/Gallery/MST/img3.jpg";
import MST_img4 from "/src/assets/Gallery/MST/img4.jpg";
import MST_img5 from "/src/assets/Gallery/MST/img5.jpg";
import MST_img6 from "/src/assets/Gallery/MST/img6.jpg";
import MST_img7 from "/src/assets/Gallery/MST/img7.jpg";
import MST_img8 from "/src/assets/Gallery/MST/img8.jpg";
import MST_img9 from "/src/assets/Gallery/MST/img9.jpg";
import MST_img10 from "/src/assets/Gallery/MST/img10.jpg";
import MST_img11 from "/src/assets/Gallery/MST/img11.jpg";
import MST_img12 from "/src/assets/Gallery/MST/img12.jpg";
import MST_img13 from "/src/assets/Gallery/MST/img13.jpg";
import MST_img14 from "/src/assets/Gallery/MST/img14.jpg";
import MST_img15 from "/src/assets/Gallery/MST/img15.jpg";
import MST_img16 from "/src/assets/Gallery/MST/img16.jpg";
import MST_img17 from "/src/assets/Gallery/MST/img17.jpg";
import MST_img18 from "/src/assets/Gallery/MST/img18.jpg";
import MST_img19 from "/src/assets/Gallery/MST/img19.jpg";
import MST_img20 from "/src/assets/Gallery/MST/img20.jpg";
import MST_img21 from "/src/assets/Gallery/MST/img21.jpg";
import MST_img22 from "/src/assets/Gallery/MST/img22.jpg";
import MST_img23 from "/src/assets/Gallery/MST/img23.jpg";
import MST_img24 from "/src/assets/Gallery/MST/img24.jpg";

//KV Gallery
import KV_img1 from "/src/assets/Gallery/KV/img1.jpg";
import KV_img2 from "/src/assets/Gallery/KV/img2.jpg";
import KV_img3 from "/src/assets/Gallery/KV/img3.jpg";
import KV_img4 from "/src/assets/Gallery/KV/img4.jpg";
import KV_img5 from "/src/assets/Gallery/KV/img5.jpg";
import KV_img6 from "/src/assets/Gallery/KV/img6.jpg";
import KV_img7 from "/src/assets/Gallery/KV/img7.jpg";
import KV_img8 from "/src/assets/Gallery/KV/img8.jpg";
import KV_img9 from "/src/assets/Gallery/KV/img9.jpg";
import KV_img10 from "/src/assets/Gallery/KV/img10.jpg";
import KV_img11 from "/src/assets/Gallery/KV/img11.jpg";
import KV_img12 from "/src/assets/Gallery/KV/img12.jpg";
import KV_img13 from "/src/assets/Gallery/KV/img13.jpg";
import KV_img14 from "/src/assets/Gallery/KV/img14.jpg";
import KV_img15 from "/src/assets/Gallery/KV/img15.jpg";
import KV_img16 from "/src/assets/Gallery/KV/img16.jpg";
import KV_img17 from "/src/assets/Gallery/KV/img17.jpg";
import KV_img18 from "/src/assets/Gallery/KV/img18.jpg";

// ST ALPHONSA COLLEGE GALLERY
import Alphonsa_img1 from "/src/assets/Gallery/St Alphonsa College/img1.jpg";
import Alphonsa_img2 from "/src/assets/Gallery/St Alphonsa College/img2.jpg";
import Alphonsa_img3 from "/src/assets/Gallery/St Alphonsa College/img3.jpg";
import Alphonsa_img4 from "/src/assets/Gallery/St Alphonsa College/img4.jpg";
import Alphonsa_img5 from "/src/assets/Gallery/St Alphonsa College/img5.jpg";
import Alphonsa_img6 from "/src/assets/Gallery/St Alphonsa College/img6.jpg";
import Alphonsa_img7 from "/src/assets/Gallery/St Alphonsa College/img7.jpg";
import Alphonsa_img8 from "/src/assets/Gallery/St Alphonsa College/img8.jpg";
import Alphonsa_img9 from "/src/assets/Gallery/St Alphonsa College/img9.jpg";
import Alphonsa_img10 from "/src/assets/Gallery/St Alphonsa College/img10.jpg";
import Alphonsa_img11 from "/src/assets/Gallery/St Alphonsa College/img11.jpg";
import Alphonsa_img12 from "/src/assets/Gallery/St Alphonsa College/img12.jpg";
import Alphonsa_img13 from "/src/assets/Gallery/St Alphonsa College/img13.jpg";
import Alphonsa_img14 from "/src/assets/Gallery/St Alphonsa College/img14.jpg";
import Alphonsa_img15 from "/src/assets/Gallery/St Alphonsa College/img15.jpg";
import Alphonsa_img16 from "/src/assets/Gallery/St Alphonsa College/img16.jpg";
import Alphonsa_img17 from "/src/assets/Gallery/St Alphonsa College/img17.jpg";
import Alphonsa_img18 from "/src/assets/Gallery/St Alphonsa College/img18.jpg";
import Alphonsa_img19 from "/src/assets/Gallery/St Alphonsa College/img19.jpg";
import Alphonsa_img20 from "/src/assets/Gallery/St Alphonsa College/img20.jpg";
import Alphonsa_img21 from "/src/assets/Gallery/St Alphonsa College/img21.jpg";


import prevIcon from "/src/assets/prev.svg";
import nextIcon from "/src/assets/next.svg";
import backIcon from "/src/assets/back.svg";

const photo = [
  {
    id: 1,
    images: [
      team_img1,
      baselios_img2,
      Meetings_img1,
      Pangada_img8,
      syndusmos_img4,
    ],
  },
];


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
          name: "Syndusmos",
          images: [
            syndusmos_img1,
            syndusmos_img2,
            syndusmos_img3,
            syndusmos_img4,
            syndusmos_img5,
            syndusmos_img6,
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
          name: "Works",
          images: [work_img1],
          parentAlbum: 13, // Ensure parentAlbum is set
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
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl mb-4">
          Gallery
        </h1>

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

        <button
          className="gallery-btn"
          onClick={() => setIsAlbumPopupOpen(true)}
        >
          See More
        </button>

        {isAlbumPopupOpen && (
          <div className="album-popup">
            <span className="album-popup-close" onClick={handleClosePopup}>
              &times;
            </span>
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