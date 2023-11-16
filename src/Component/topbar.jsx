import React,{useState} from "react";
import up from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/arrow_up.png"
import down from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/arrow_down.png"


const TopBar = ({title,content}) => {

    const [isOpen, setIsOpen] = useState(false)


const toggleIsOpen = () => {
    setIsOpen(!isOpen);
};

return(
    <div className="topBar-container">
      <div className="topBar-title">
        <h2>{title}</h2>
        <p onClick={toggleIsOpen}>
          {isOpen ? (
            <img src={up} className="arrow-up" alt="up"/>
          ) : (
            <img src={down} className="arrow-down" alt="down"/>
          )}
        </p>
      </div>
      <div className="topBar-content">
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  
)}

export default TopBar