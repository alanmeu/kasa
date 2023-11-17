

import { useParams } from "react-router-dom";
import logements from "/Users/alan/Desktop/kasa/kasa/src/logements.json";
import MainLayout from "../Layout/MainLayout";
import Carrousel from "../Component/carousel";
import TopBar from "../Component/topbar";
import Note from "../Component/rating";
import "/Users/alan/Desktop/kasa/kasa/src/style/logement/host.css"





const Logement = () => {
  const {id} = useParams();
 

  const logement = logements.find((log) => log.id === id);
  

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <MainLayout>
    <div>
      <Carrousel slides={logement.pictures}/>
      <div className="container">
  <div className="left-content">
    <h2>{logement.title}</h2>
    <p>{logement.location}</p>
    <ul>
      {logement.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  </div>

  <div className="host">
  <div className="profil">
    <img src={logement.host.picture} alt={logement.host.name} />
      <p>{logement.host.name}</p>
   </div>   
  <div className="host-info">
    <Note rating={logement.rating} />
  </div>
</div>
</div>
    </div>
    <div className="topbar-log">
      <TopBar title="Description" content={logement.description}/>
      <TopBar title="Equipements" content={logement.equipments.map((item, index) => (
      <li key={index}>{item}</li>
      ))} />
   </div>
    </MainLayout>
  );
};

export default Logement;
