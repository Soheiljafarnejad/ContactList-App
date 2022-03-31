import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ContactList from "./Components/ContactList/ContactList";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout";
import NewContact from "./Components/NewContact/NewContact";
import EditContact from "./Components/EditContact/EditContact";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="new-contact" element={<NewContact />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/contact/edit/:id" element={<EditContact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
