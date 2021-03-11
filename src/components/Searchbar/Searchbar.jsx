import s from "./Searchbar.module.css";

const Searchbar = ({ value, onChange, onSubmit }) => {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} value="" onSubmit={onSubmit}>
        <button type="submit" className={s["SearchForm-button"]}>
          <span className={s["SearchForm-button-label"]}>Search</span>
        </button>
        <input
          className={s["SearchForm-input"]}
          autoComplete="off"
          autoFocus
          type="text"
          placeholder="Search images and photos"
          value={value}
          onChange={onChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
