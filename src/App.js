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
    setContact([...contact, value]);
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
        <main className="main">
          <Routes>
            <Route
              path="new-contact"
              element={<FormContact addContactHandler={addContactHandler} />}
            />
            <Route
              path="/"
              element={
                <ContactList contact={contact} onDelete={deleteHandler} />
              }
            />
            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
