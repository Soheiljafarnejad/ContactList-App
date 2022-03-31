import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ContactList from "./Components/ContactList/ContactList";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout";
import NewContact from "./Components/NewContact/NewContact";
import EditContact from "./Components/EditContact/EditContact";
import "./App.css";
import axios from "axios";

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

  const editHandler = (value) => {
    const index = contact.findIndex((item) => item.id === value.id);
    const selectedItem = { ...contact[index] };
    selectedItem.name = value.name;
    selectedItem.email = value.email;
    selectedItem.phone = value.phone;
    selectedItem.date = new Date().toISOString();
    const clone = [...contact];
    clone[index] = selectedItem;
    setContact(clone);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/contacts")
      .then((response) => {
        setContact(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <ContactList contact={contact} onDelete={deleteHandler} />
              }
            />
            <Route
              path="new-contact"
              element={<NewContact addContactHandler={addContactHandler} />}
            />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route
              path="/contact/edit/:id"
              element={<EditContact onEdit={editHandler} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
