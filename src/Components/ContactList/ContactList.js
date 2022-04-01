import { useEffect, useState } from "react";
import { deleteRequest, getRequest } from "../../services/httpService";
import Contact from "../Contact/Contact";
import EmptyPage from "../EmptyPage/EmptyPage";
import style from "./ContactList.module.css";
import toast from "react-hot-toast";
const ContactList = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getRequest()
      .then((response) => setContact(response.data))
      .catch((error) => toast.error(`${error.toString()}`));
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteRequest(id);
      getRequest()
        .then((response) => setContact(response.data))
        .catch((error) => toast.error(`${error.toString()}`));
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
