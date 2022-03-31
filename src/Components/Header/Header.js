import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <a
        href="https://github.com/Soheiljafarnejad/ContactList-App.git"
        target="_blank"
        rel="noreferrer"
      >
        <h1>Contacts</h1>
      </a>
    </header>
  );
};

export default Header;
