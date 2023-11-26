
import React from "react"
import { Link } from "react-router-dom"
import logements from "/Users/alan/Desktop/kasa/src/logements.json"
import Card from "/Users/alan/Desktop/kasa/src/Component/Card"

const Gallery = () => {
  return (
    <div className="home_gallerie">
    <article className="cards-gallerie">
      {logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`} className="link">
          <Card className="card-gallerie" image={logement.cover} title={logement.title} />
        </Link>
      ))}
    </article>
    </div>
  );
}


export default Gallery;
