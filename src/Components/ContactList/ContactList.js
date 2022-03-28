import Contact from "../Contact/Contact";

const ContactList = ({ contact }) => {
  if (contact.length === 0) {
    return <h2>Empty ContactList ...</h2>;
  }
  return (
    <section>
      {contact.map((item) => {
        return <Contact title={item.name} email={item.email} key={item.id} />;
      })}
    </section>
  );
};

export default ContactList;
