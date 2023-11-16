import React from "react";
import Bannier from "/Users/alan/Desktop/kasa/kasa/src/Component/bannier.jsx"
import image from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/Image source 2 (1).png"
import "/Users/alan/Desktop/kasa/kasa/src/style/nav/nav.css"
import "/Users/alan/Desktop/kasa/kasa/src/style/banner/banner.css"
import TopBar from "../Component/topbar";
import TopBarData from "/Users/alan/Desktop/kasa/kasa/src/TopBar.json"
import "/Users/alan/Desktop/kasa/kasa/src/style/topBar/topbar.css"
import MainLayout from "../Layout/MainLayout";


const About = () =>{

    return(

    <MainLayout>
        <Bannier image={image} />
        
            {TopBarData.map((item) => {
              return (
                <div key={item.id}>
                  <TopBar content={item.content} title={item.title} />
                </div>
              );
            })}
        </MainLayout>
    )
}




export default About