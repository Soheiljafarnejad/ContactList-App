import FormContact from "./Components/FormContact/FormContact";
import HeaderCom from "./Components/Header/HeaderCom";
import "./App.css";
import ContactList from "./Components/ContactList/ContactList";
const App = () => {
  return (
    <>
      <HeaderCom />
      <main className="main">
        <FormContact />
        <ContactList />
      </main>
    </>
  );
};

export default App;
