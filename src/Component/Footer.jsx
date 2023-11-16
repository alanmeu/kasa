import React from "react";
import LogoDark from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/darklogo.svg"
import "/Users/alan/Desktop/kasa/kasa/src/style/footer/footer.css"


const Footer = () => {

    return (
    
        <footer className="Footer">
            <img src={LogoDark} alt="logofoot" className="logodark"/>
            <p className="FooterText">
            © 2020 Kasa. All rights reserved
            </p>
        
        </footer>
    )
}

export default Footer