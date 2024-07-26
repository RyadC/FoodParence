import { Link } from "react-router-dom";
import logo from "../assets/images/Groupe 1.png";
import SearchForm from "./SearchForm";

const Main = () => {
  return (
    <section className="home">
      <h1 className="home__h1">
        <Link className="home__link" to="/">
          <img className="home__img" src={logo} alt="Le Logo de Food'Parence" />
        </Link>
      </h1>

      <p className="home__slogan">
        Exigez plus de <strong className="important">transparence</strong> pour
        vos <strong className="important">produits</strong>
      </p>

      <SearchForm />
    </section>
  );
};

export default Main;
