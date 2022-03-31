import FormContact from "../../Common/FormContact/FormContact";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postRequest } from "../../services/httpService";

const NewContact = () => {
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
      date: new Date().toISOString(),
    });
  };

  const onSubmit = () => {
    addContactHandler(value);
  };

  const addContactHandler = async (value) => {
    try {
      await postRequest(value);
      toast.success("Successful");
      history("/");
    } catch (error) {
      console.log(error);
    }
    setValue({ name: "", email: "", phone: "" });
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
