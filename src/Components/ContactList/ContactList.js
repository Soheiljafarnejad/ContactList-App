import Contact from "../Contact/Contact";
import EmptyPage from "../EmptyPage/EmptyPage";
import style from "./ContactList.module.css";
const ContactList = ({ contact, onDelete }) => {
  if (contact.length === 0) {
    return <EmptyPage />;
  }
  return (
    <section className={`container ${style.contactList}`}>
      <h3>Contact List</h3>
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
