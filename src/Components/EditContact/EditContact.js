import FormContact from "../../Common/FormContact/FormContact";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const EditContact = ({ onEdit }) => {
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

    toast.success("Updated");
    onEdit(value);
    history("/");
  };

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
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
