import { NavLink } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import error from "/Users/alan/Desktop/kasa/src/Assets/Images/404 (1).svg"
import small from "/Users/alan/Desktop/kasa/src/Assets/Images/404mobile.svg"
import "/Users/alan/Desktop/kasa/src/style/erreur/erreur.css"

export default function Erreur() {
  
  return (
    <>
     <MainLayout>
      <div className="error-404">
      <picture>
            <source media="(max-width: 375px)" srcSet={small} />
            <img src={error} className="erreur-number" alt="error" />
          </picture>
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