import React, { useState } from "react";
import left from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/arrow_left.png";
import right from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/arrow_right.png";

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
      <section className="slide">
        {length > 1 && (
          <img src={left} className="left-Arrow" alt="left" onClick={prevImage} />
        )}
        {length > 1 && (
          <img src={right} className="right-Arrow" alt="right" onClick={nextImage} />
        )}
        {slides.map((image, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slider active" : "slider"}
            >
              {index === current && (
                <img src={image} alt="img-appartement" className="slide__image" />
              )}
              {index === current && length > 1 && (
                <span className="slider__number">
                  {current + 1}/{length}
                </span>
              )}
            </div>
          );
        })}
      </section>
    );
  } catch (error) {
    console.error("Erreur dans le composant Carrousel:", error);
    return <div>Erreur dans le composant Carrousel. Veuillez consulter la console pour plus d'informations.</div>;
  }
}

export default Carrousel;
