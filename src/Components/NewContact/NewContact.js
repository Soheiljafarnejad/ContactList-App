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
    const toastId = toast.loading("Loading...");
    try {
      await postRequest(value);
      toast.success("Successful", {
        id: toastId,
      });
      setValue({ name: "", email: "", phone: "" });
      history("/");
    } catch (error) {
      toast.error(`${error.toString()}`, {
        id: toastId,
      });
    }
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
