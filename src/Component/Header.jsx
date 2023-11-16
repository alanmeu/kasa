import logo from "/Users/alan/Desktop/kasa/kasa/src/Assets/Images/LOGO.svg";
import Nav from "/Users/alan/Desktop/kasa/kasa/src/Component/Nav.jsx";
import "/Users/alan/Desktop/kasa/kasa/src/style/header.css"

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav" />
    </header>
  );
}