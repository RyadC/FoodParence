import logo from "../assets/images/Groupe 1.png";
const Main = () => {
  return (
    <section className="home">
      <h1 className="home-h1">
        <a className="home-h1-link" href="#0">
          <img
            className="home-h1-img"
            src={logo}
            alt="Le Logo de Food'Parence"
          />
        </a>
      </h1>

      <p className="home-slogan">
        Exigez plus de{" "}
        <strong className="slogan-important">transparence</strong> pour vos{" "}
        <strong className="slogan-important">produits</strong>
      </p>

      <form
        id="form"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   launchSearch();
        //   jsProduct();
        // }}
      >
        {/* <BarCodeSearch onInputChange={onInputChange} /> */}
        <div className="search-detailsProduct">
          <div className="search-detailsProduct-container">
            {/* <CheckboxSearch checkboxName={'Allergènes'} nameProp={'allergen'} handleCheckbox={handleCheckbox} />
          <CheckboxSearch checkboxName={'Additifs'} nameProp={'additive'} handleCheckbox={handleCheckbox} />
          <CheckboxSearch checkboxName={'Non Halal'} nameProp={'no-halal'} handleCheckbox={handleCheckbox} /> */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Main;
