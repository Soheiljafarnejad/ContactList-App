import { Link } from "react-router-dom";
import style from "./EmptyPage.module.css";
import empty from "./img/empty.png";
const EmptyPage = () => {
  return (
    <section className={style.empty}>
      <div className={style.title}>
        <h2>NOTHING!!</h2>
        <p>Your Contact list is empty.</p>
        <Link to="new-contact">
        <button>New Contact</button>
        </Link>
      </div>
      <img src={empty} alt="empty list" />
    </section>
  );
};

export default EmptyPage;
