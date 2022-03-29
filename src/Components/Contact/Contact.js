import style from "./Contact.module.css";
import contactImg from "./img/contact.png";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id, phone } = contact;
  return (
    <div className={style.contact}>
      <Link state={contact} to={`/contact/${id}`}>
        <div className={style.description}>
          <img src={contactImg} alt="contact-img" />
          <div className={style.title}>
            <h4>{name}</h4>
            <p>{phone||email}</p>
          </div>
        </div>
      </Link>

      <button onClick={onDelete}>
        <BiTrash />
      </button>
    </div>
  );
};

export default Contact;
