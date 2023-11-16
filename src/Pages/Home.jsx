import React from "react";
import Gallery from "../Component/Gallery";
import Bannier from "../Component/bannier";
import montagne from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/Image source 1.png"
import "/Users/alan/Desktop/kasa/kasa/src/style/gallery/gallery.css"
import MainLayout from "../Layout/MainLayout";




const Home = () => {
    return (
     <MainLayout>
        <Bannier texte="Chez vous, partout et ailleurs" image={montagne} />
        <Gallery/>
        </MainLayout>

    
    );
  };
  
  export default Home;