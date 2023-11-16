import { NavLink } from "react-router-dom";



const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/home" className="nav-home">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav-about">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;