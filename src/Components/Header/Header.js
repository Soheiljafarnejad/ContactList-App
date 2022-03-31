import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <h1>Contacts</h1>
    </header>
  );
};

export default Header;
