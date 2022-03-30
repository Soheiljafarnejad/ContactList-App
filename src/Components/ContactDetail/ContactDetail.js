import { Link, useLocation } from "react-router-dom";
import style from "./ContactDetail.module.css";

const ContactDetail = () => {
  const location = useLocation();
  const contact = location.state;

  const dateFormat = new Date(contact.date).toLocaleString("en", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <section className={`container ${style.contact}`}>
      <div className={style.title}>
        <h3>Contacts Detail</h3>
        <Link to={`/contact/edit/${contact.id}`} state={contact}>
          <button>Edit</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Contact</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name</th>
            <td className={style.text}>
              <span>{contact.name}</span>
            </td>
          </tr>

          <tr>
            <th>Email</th>
            <td className={style.text}>
              <span>
                <a href={`mailto:${contact.email}`}>{contact.email || "-"}</a>
              </span>
            </td>
          </tr>

          <tr>
            <th>Phone</th>
            <td className={style.text}>
              <a href={`tel:${contact.phone}`}>{contact.phone || "-"}</a>
            </td>
          </tr>

          <tr>
            <th>Update</th>
            <td>{dateFormat}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ContactDetail;
