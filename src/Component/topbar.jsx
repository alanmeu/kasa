import React,{useState} from "react";
import up from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/arrow_up.png"
import down from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/arrow_down.png"


const TopBar = ({title,content}) => {

    const [isOpen, setIsOpen] = useState(false)


const toggleIsOpen = () => {
    setIsOpen(!isOpen);
};

return(
  <div className={`topBar-container ${isOpen ? 'open' : ''}`}>
      <div className="topBar-title" onClick={toggleIsOpen}>
        <h2>{title}</h2>
        <p>
          {isOpen ? (
            <img src={up} className="arrow-up" alt="up" />
          ) : (
            <img src={down} className="arrow-down" alt="down" />
          )}
        </p>
      </div>
      <div className="topBar-content">
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};


export default TopBar