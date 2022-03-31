import FormContact from "../../Common/FormContact/FormContact";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const NewContact = ({ addContactHandler }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const history = useNavigate();
  const changeHandler = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = () => {
    toast.success("Successful");
    addContactHandler(value);
    setValue({ name: "", email: "", phone: "" });
    history("/");
  };

  return (
    <FormContact
      edit={false}
      changeHandler={changeHandler}
      value={value}
      onSubmit={onSubmit}
    />
  );
};

export default NewContact;
