import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormContact from "./Components/FormContact/FormContact";
import HeaderCom from "./Components/Header/HeaderCom";
import ContactList from "./Components/ContactList/ContactList";
import "./App.css";
import ContactDetail from "./Components/ContactDetail/ContactDetail";

const App = () => {
  const [contact, setContact] = useState([]);

  const deleteHandler = (id) => {
    const selectedItem = contact.filter((item) => item.id !== id);
    setContact(selectedItem);
  };

  const addContactHandler = (value) => {
    const id = Date.now();
    const date = new Date().toISOString();
    setContact([...contact, { ...value, id, date }]);
  };

  const editHandler = (id, type, value) => {
    const index = contact.findIndex((item) => item.id === id);
    const selectedItem = { ...contact[index] };
    selectedItem[type] = value[type];
    selectedItem.date = new Date().toISOString();
    const clone = [...contact];
    clone[index] = selectedItem;
    setContact(clone);
  };

  useEffect(() => {
    const allContact = JSON.parse(localStorage.getItem("contact"));
    if (allContact) setContact(allContact);
  }, []);

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  return (
    <>
      <BrowserRouter>
        <HeaderCom />
        <Routes>
          <Route
            path="/"
            element={<ContactList contact={contact} onDelete={deleteHandler} />}
          />
          <Route
            path="new-contact"
            element={<FormContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={<ContactDetail onEdit={editHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
