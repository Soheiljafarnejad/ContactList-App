import { useState } from "react";
import FormContact from "./Components/FormContact/FormContact";
import HeaderCom from "./Components/Header/HeaderCom";
import "./App.css";
import ContactList from "./Components/ContactList/ContactList";
const App = () => {
  const [contact, setContact] = useState([]);
  return (
    <>
      <HeaderCom />
      <main className="main">
        <FormContact contact={contact} setContact={setContact} />
        <ContactList contact={contact} />
      </main>
    </>
  );
};

export default App;
