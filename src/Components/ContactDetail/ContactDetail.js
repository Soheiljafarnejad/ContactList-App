import { useLocation } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const contact = location.state;
  return (
    <section className="container">
      <p>{contact.name}</p>
      <p>{contact.email}</p>
    </section>
  );
};

export default ContactDetail;
