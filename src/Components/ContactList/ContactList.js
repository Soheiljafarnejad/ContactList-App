import Contact from "../Contact/Contact";

const ContactList = ({ contact, onDelete }) => {
  if (contact.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Empty ContactList ...
      </h2>
    );
  }
  return (
    <section>
      {contact.map((item) => {
        return (
          <Contact
            title={item.name}
            email={item.email}
            key={item.id}
            onDelete={() => onDelete(item.id)}
          />
        );
      })}
    </section>
  );
};

export default ContactList;
