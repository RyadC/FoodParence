import { Link } from "react-router-dom";
import logo from "../assets/images/Groupe 4.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-logo__link">
          <img
            className="header-logo__img"
            src={logo}
            alt="Logo de FoodParence"
          />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-menu__item">
            <Link to="/" className="nav-menu-item__link">
              Accueil
            </Link>
            <Link to="/ressources" className="nav-menu-item__link">
              Ressources
            </Link>
            <Link to="/fonctionnement" className="nav-menu-item__link">
              Fonctionnement
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
