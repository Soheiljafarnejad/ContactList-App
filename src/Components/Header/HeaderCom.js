import Navigation from "../Navigation/Navigation";
import style from "./HeaderCom.module.css";
const HeaderCom = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <h2>Content Manager</h2>
    </header>
  );
};

export default HeaderCom;
