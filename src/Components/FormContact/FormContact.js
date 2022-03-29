import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./FormContact.module.css";
const FormContact = ({ addContactHandler }) => {
  const [value, setValue] = useState({ name: "", email: "", id: null });
  const history = useNavigate();
  const changeHandler = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value, id: Date.now() });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!value.name || !value.email) {
      alert("please enter value");
      return;
    }

    addContactHandler(value);
    setValue({ name: "", email: "" });
    history("/");
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

        <button>Add</button>
      </form>
    </section>
  );
};

export default FormContact;
