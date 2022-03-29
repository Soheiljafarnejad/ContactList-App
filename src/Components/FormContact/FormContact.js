import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./FormContact.module.css";
const FormContact = ({ addContactHandler }) => {
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (!value.name || (!value.email && !value.phone)) {
      alert("please enter value");
      return;
    }

    addContactHandler(value);
    setValue({ name: "", email: "", phone: "" });
    history("/");
  };

  const checkInput = (e) => {
    if (
      !(
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 8
      )
    ) {
      e.preventDefault();
    }
  };

  return (
    <section className="container">
      <h3>Add Contact</h3>

      <form className={style.form} onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          onChange={changeHandler}
          value={value.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={value.email}
        />

        <label htmlFor="email">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Phone"
          onChange={changeHandler}
          onKeyDown={checkInput}
          value={value.phone}
          maxLength="11"
          minLength="11"
        />

        <button>Add</button>
      </form>
    </section>
  );
};

export default FormContact;
