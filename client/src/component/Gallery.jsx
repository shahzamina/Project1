import React, { useState } from 'react';

const Gallery = ({ images = [] }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleImageClick = (idx) => {
    if (window.innerWidth < 768) {
      // 📱 On small screens, open image directly in a new tab
      window.open(images[idx], "_blank");
    } else {
      // 💻 On md+ screens, open popup
      setSelectedIdx(idx);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setSelectedIdx(null);
  };

  return (
    <div className=" dyn my-5">
      <div className="g-mar d-flex flex-column flex-wrap flex-md-row gap-3 mt-3">
        {images.map((img, idx) => (
          <div className="image-container" key={idx}>
            <img
              src={img}
              alt={`gallery-${idx}`}
              className=" gal-wid"
              onClick={() => handleImageClick(idx)}
            />
          </div>
        ))}
      </div>

      {selectedIdx !== null &&(
  <div
    className="image-container d-none  d-md-flex"
    onClick={() => setSelectedIdx(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      cursor: "pointer",
    }}
  >
    {/* Close Button */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        setSelectedIdx(null);
      }}
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        fontSize: "2rem",
        color: "white",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      &times;
    </button>

    {/* Previous Button */}
    <button
      onClick={handlePrev}
      style={{
        position: "absolute",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "2rem",
        color: "white",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      &#10094;
    </button>

    {/* Selected Image */}
    <img
      src={images[selectedIdx]}
      alt="Selected"
      style={{ maxWidth: "90%", maxHeight: "80%" }}
    />

    {/* Next Button */}
    <button
      onClick={handleNext}
      style={{
        position: "absolute",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "2rem",
        color: "white",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      &#10095;
    </button>
  </div>
)}

    </div>
  );
};

export default Gallery;
