import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./FormContact.module.css";
import toast from "react-hot-toast";
const FormContact = ({ addContactHandler }) => {
  const nameRef = useRef();
  const emailRef = useRef();

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
      if (!value.name) {
        toast.error("Please Enter Name");
        nameRef.current.focus();
        return;
      }
      toast.error("Enter Phone or Email");
      emailRef.current.focus();
      return;
    }

    toast.success("Successful");
    addContactHandler(value);
    setValue({ name: "", email: "", phone: "" });
    history("/");
  };

  const checkInput = (e) => {
    if (
      !(
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        (e.keyCode === 8 || e.keyCode === 13)
      )
    ) {
      toast.error("Enter Number");
      e.preventDefault();
    }
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <section className="container">
      <h3>Add Contact</h3>

      <form className={style.form} onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          placeholder="Name"
          onChange={changeHandler}
          value={value.name}
          autocomplete="off"

        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          placeholder="Email"
          onChange={changeHandler}
          value={value.email}
          autocomplete="off"

        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Phone"
          onChange={changeHandler}
          onKeyDown={checkInput}
          value={value.phone}
          maxLength="11"
          minLength="11"
          autocomplete="off"

        />

        <button>Add</button>
      </form>
    </section>
  );
};

export default FormContact;
