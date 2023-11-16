import { NavLink } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import error from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/404 (1).svg"

export default function Erreur() {
  
  return (
    <>
     <MainLayout>
      <div className="error-404">
        <img src={error} className="erreur-number" alt="error"/>
        <p className="erreurText">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/home" className="errorContainer__Link">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
      </MainLayout>
    </>
  );
}