import { useEffect, useState } from "react";
import { deleteRequest, getRequest } from "../../services/httpService";
import Contact from "../Contact/Contact";
import EmptyPage from "../EmptyPage/EmptyPage";
import style from "./ContactList.module.css";
const ContactList = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getRequest()
      .then((response) => setContact(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteRequest(id);
      getRequest()
        .then((response) => setContact(response.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

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
            onDelete={() => deleteHandler(item.id)}
          />
        );
      })}
    </section>
  );
};

export default ContactList;
