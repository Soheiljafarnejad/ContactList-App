import FormContact from "./Components/FormContact/FormContact";
import HeaderCom from "./Components/Header/HeaderCom";
import "./App.css";
const App = () => {
  return (
    <>
      <HeaderCom />
      <main className="main">
        <FormContact />
      </main>
    </>
  );
};

export default App;
