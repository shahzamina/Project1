import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ carousal = [], h }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Adjust number of cards based on window width
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) setCardsToShow(1);
    else if (width >= 768 && width < 992) setCardsToShow(2);
    else setCardsToShow(3);
  };

  useEffect(() => {
    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleCards = () => {
    if (carousal.length === 0) return [];
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(carousal[(startIndex + i) % carousal.length]);
    }
    return visible;
  };

  const pre = () => {
  setStartIndex((prev) => {
    const newIndex = (prev - cardsToShow + carousal.length) % carousal.length;
    return newIndex;
  });
};


  const next = () => {
    setStartIndex((prev) => (prev + cardsToShow) % carousal.length);
  };

  const visibleCard = getVisibleCards();

  return (
    <div
      className="dyn"
      style={{
        marginTop: '10%',
        marginBottom: '2%',
        
        paddingBottom: '3%',
        position: 'relative',
        overflow: 'hidden',
       
      }}
    >
      <h2
        className="text-center"
        style={{ fontFamily: 'Lato',wordSpacing:'1px', fontWeight: 'bold' }}
      >
        {h}
      </h2>

      <i
        onClick={pre}
        
        className="fa-solid fa-chevron-left carousel-icon left"
      ></i>

      <div className="d-flex flex-row flex-wrap justify-content-center gap-1">
        {visibleCard.map((item, index) => (
          <div
            key={index}
            className="w-card image-container me-3 bg-white pb-4 h-75 mt-5 mb-5"
            style={{
              boxShadow: '0px 2px 4px rgb(18, 150, 184)',
        //      width: `${83 / cardsToShow - 2}%`,
              position: 'relative',
            }}
          >
            <img
              className="p-3"
              style={{ width: '100%', height: '400px' }}
              src={item.img}
              alt={item.title}
            />
            <h3
              className="cards fs-5 style p-4 text-center"
              style={{
                fontFamily:'Lato',
                wordSpacing:'1px',
                borderRadius: '50%',
                backgroundColor: 'rgb(18, 150, 184)',
                
                
              }}
            >
              {item.title}
            </h3>
            <p
              className="style mt-5 p-3 ms-3 me-3"
              style={{ textAlign: 'justify', fontSize: '15px' ,fontFamily:'Lato',
                wordSpacing:'0px'}}
            >
              {item.p}
            </p>
          </div>
        ))}
      </div>

      <i
        onClick={next}
       
        className="fa-solid fa-chevron-right carousel-icon right"
      ></i>
    </div>
  );
};

export default Card;
