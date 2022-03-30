import Navigation from "../Navigation/Navigation";
import style from "./HeaderCom.module.css";
const HeaderCom = () => {
  return (
    <header className={style.header}>
      <Navigation />
    </header>
  );
};

export default HeaderCom;
