import React from "react";


const Bannier = ({image,texte}) =>{

    return(
        <div className="bannierContainer">
            <img className="img-bannier" src={image} alt="montagne" />
            <span className="txt">{texte}</span>

        </div>
    )
}



export default Bannier