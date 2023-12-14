import React, { useState } from "react";
import left from "/Users/alan/Desktop/kasa/src/Assets/Images/arrow_left.png";
import right from "/Users/alan/Desktop/kasa/src/Assets/Images/arrow_right.png";
import "/Users/alan/Desktop/kasa/src/style/carousel/caroussel.css"

function Carrousel({ slides }) {
  try {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextImage = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevImage = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      throw new Error("Les données de la diapositive sont indéfinies ou vides.");
    }

    return (
      <section className="carousel">
        {length > 1 && (
          <img src={left} className="left-Arrow" alt="left" onClick={prevImage} />
        )}
        {length > 1 && (
          <img src={right} className="right-Arrow" alt="right" onClick={nextImage} />
        )}
        
        {slides.map((image, index) => (
  index === current ? (
    <div key={index} className={`slider active`}>
      <img src={image} alt="img-appartement" className="slide__image" />
      {length > 1 && (
        <span className="slider__number">
          {current + 1}/{length}
        </span>
      )}
    </div>
  ) : null
))}
      </section>
    );
  } catch (error) {
    console.error("Erreur dans le composant Carrousel:", error);
    return <div>Erreur dans le composant Carrousel.</div>;
  }
}

export default Carrousel;
