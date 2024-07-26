const Checkbox = ({ attributName, name }) => {
  return (
    <label
      className="search-detailsProduct__labelCheckbox"
      htmlFor={`${attributName}-checkbox`}
    >
      <input
        className={`search-detailsProduct__${attributName} search-detailsProduct__checkbox`}
        type="checkbox"
        name={`${attributName}-checkbox`}
        id={`${attributName}-checkbox`}
      />
      {name}
    </label>
  );
};

export default Checkbox;
