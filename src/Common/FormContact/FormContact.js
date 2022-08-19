import { useRef, useEffect } from "react";
import style from "./FormContact.module.css";
import toast from "react-hot-toast";
const FormContact = ({ edit, changeHandler, value, onSubmit }) => {
  const nameRef = useRef();
  const emailRef = useRef();

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
    onSubmit(e);
  };

  const checkInput = (e) => {
    if (
      !(
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 8 ||
        e.keyCode === 13
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
    <section className={`container ${style.formContainer}`}>
      <h3>{edit ? "Edit" : "Add"} Contact</h3>

      <form className={style.form} onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          placeholder="Name"
          onChange={changeHandler}
          value={value.name}
          autoComplete="off"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          placeholder="Email"
          onChange={changeHandler}
          value={value.email}
          autoComplete="off"
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
          autoComplete="off"
        />

        <div className={style.btn}>
          <button type="submit" value="save">
            {edit ? "Save" : "Add"}
          </button>
          {edit && (
            <button type="submit" value="cancel" className={style.cancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default FormContact;
