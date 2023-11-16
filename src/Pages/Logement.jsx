

import { useParams } from "react-router-dom";
import logements from "/Users/alan/Desktop/kasa/kasa/src/logements.json";
import MainLayout from "../Layout/MainLayout";
import Carrousel from "../Component/carousel";
import TopBar from "../Component/topbar";




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
  <div>
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
      <ul>
        {logement.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
        ))}
     </ul>
  </div>
      <div className="host">
        <img src={logement.host.picture} alt={logement.host.name}/>
        <p>{logement.host.name}</p>
        <p>{logement.rating}</p>
      </div>
      {/* Affichez d'autres détails du logement selon vos besoins */}
    </div>
    <div>
    <TopBar title="Description" content={logement.description}/>
    <TopBar title="Equipements" content={logement.equipments.map((item, index) => (
  <li key={index}>{item}</li>
))} />

    
    </div>
    </MainLayout>
  );
};

export default Logement;
