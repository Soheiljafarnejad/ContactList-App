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

  const searchHandler = (e) => {
    getRequest()
      .then((response) => {
        const filtered = response.data.filter((item) => {
          return Object.values(item)
            .splice(0, 3)
            .join(" ")
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });
        setContact(filtered);
      })
      .catch((error) => toast.error(`${error.toString()}`));
  };

  return (
    <section className={`container ${style.contactList}`}>
      <div className={style.contactHeader}>
        <h3>Contact List</h3>
        <input type="text" placeholder="Search..." onChange={searchHandler} />
      </div>

      {contact.length === 0 ? (
        <EmptyPage />
      ) : (
        contact.map((item) => {
          return (
            <Contact
              contact={item}
              key={item.id}
              onDelete={() => deleteHandler(item.id)}
            />
          );
        })
      )}
    </section>
  );
};

export default ContactList;
