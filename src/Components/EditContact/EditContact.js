import FormContact from "../../Common/FormContact/FormContact";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { putRequest } from "../../services/httpService";

const EditContact = () => {
  const history = useNavigate();
  const location = useLocation();
  const contact = location.state;
  const [value, setValue] = useState(contact);

  const onSubmit = (e) => {
    const type = e.nativeEvent.submitter.value;
    if (type === "cancel") {
      history("/");
      return;
    }
    editHandler(value);
  };

  const changeHandler = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
      date: new Date().toISOString(),
    });
  };

  const editHandler = async (value) => {
    try {
      await putRequest(value.id, value);
      toast.success("Updated");
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContact
      edit={true}
      changeHandler={changeHandler}
      value={value}
      onSubmit={onSubmit}
    />
  );
};

export default EditContact;
