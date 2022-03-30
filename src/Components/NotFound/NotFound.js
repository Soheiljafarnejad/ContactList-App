import { Link } from "react-router-dom";
import img from "./img/NotFound.png";
import style from "./NotFound.module.css";
const NotFound = () => {
  return (
    <section className={style.notFound}>
      <img src={img} alt="error 404 NotFound" />
      <div className={style.title}>
        <h2>OOPS! PAGE NOT FOUND.</h2>
        <p>
          You must have picked the wrong door because I haven't been able to lay
          my eye on the page you've been searching for.
        </p>
        <Link to="/">
          <button>BACK TO HOME</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
