import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>

      <Navigation />
        <h1>Contacts</h1>
      </div>
    </header>
  );
};

export default Header;
