import { useState } from "react";
import FormContact from "./Components/FormContact/FormContact";
import HeaderCom from "./Components/Header/HeaderCom";
import "./App.css";
import ContactList from "./Components/ContactList/ContactList";
const App = () => {
  const [contact, setContact] = useState([]);

  const deleteHandler = (id) => {
    const selectedItem = contact.filter((item) => item.id !== id);
    setContact(selectedItem);
  };

  const addContactHandler = (value) => {
    setContact([...contact, value]);
  };

  return (
    <>
      <HeaderCom />
      <main className="main">
        <FormContact addContactHandler={addContactHandler} />
        <ContactList contact={contact} onDelete={deleteHandler} />
      </main>
    </>
  );
};

export default App;
