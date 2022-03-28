import style from "./Contact.module.css";
import contactImg from "./img/contact.png";
import { BiTrash } from "react-icons/bi";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.description}>
        <img src={contactImg} alt="contact-img" />
        <div className={style.title}>
          <h4>test</h4>
          <p>test@gamil.com</p>
        </div>
      </div>
      <button>
        <BiTrash />
      </button>
    </div>
  );
};

export default Contact;
