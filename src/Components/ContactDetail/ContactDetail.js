import { useLocation } from "react-router-dom";
import style from "./ContactDetail.module.css";
import { BiEdit } from "react-icons/bi";

const ContactDetail = () => {
  const location = useLocation();
  const contact = location.state;
  const dateFormat = new Date(contact.date).toLocaleString("en", {
    dateStyle: "medium",
  });

  return (
    <section className={`container ${style.contact}`}>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.th}>Detail</th>
            <th className={style.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name</th>
            <td className={style.tdEdit}>
              {contact.name}
              <button>
                <BiEdit />
              </button>
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td className={style.tdEdit}>
              {contact.email || "-"}
              <button>
                <BiEdit />
              </button>
            </td>
          </tr>
          <tr>
            <th>Phone</th>
            <td className={style.tdEdit}>
              {contact.phone || "-"}
              <button>
                <BiEdit />
              </button>
            </td>
          </tr>
          <tr>
            <th>Last Update</th>
            <td>{dateFormat}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ContactDetail;
