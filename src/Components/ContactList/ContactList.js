import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
const ContactList = ({ contact, onDelete }) => {
  if (contact.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Empty ContactList ...
      </h2>
    );
  }
  return (
    <section className={`container ${style.contactList}`}>
      <h2>Contact List</h2>
      {contact.map((item) => {
        return (
          <Contact
            contact={item}
            key={item.id}
            onDelete={() => onDelete(item.id)}
          />
        );
      })}
    </section>
  );
};

export default ContactList;
