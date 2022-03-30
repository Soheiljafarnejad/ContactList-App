import { useLocation, useNavigate } from "react-router-dom";
import style from "./ContactDetail.module.css";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import { useState } from "react";

const ContactDetail = ({ onEdit }) => {
  const history = useNavigate();
  const location = useLocation();
  const contact = location.state;

  const [edit, setEdit] = useState("");
  const [value, setValue] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
  });

  const dateFormat = new Date(contact.date).toLocaleString("en", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const type = e.nativeEvent.submitter.name;
    const id = contact.id;
    setEdit(type);
    if (e.nativeEvent.submitter.innerText) {
      if (!value.name) {
        toast.error("Please Enter Name");
        return;
      }

      toast.success("Updated");
      onEdit(id, type, value);
      setEdit("");
      history("/");
      return;
    }
  };

  return (
    <section className={`container ${style.contact}`}>
      <h3>Contacts Detail</h3>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Contact</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <EditName
              edit={edit}
              contact={contact}
              value={value}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          </tr>

          <tr>
            <EditEmail
              edit={edit}
              contact={contact}
              value={value}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          </tr>

          <tr>
            <EditPhone
              edit={edit}
              contact={contact}
              value={value}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          </tr>

          <tr>
            <th>Update</th>
            <td>{dateFormat}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ContactDetail;

const EditName = ({ edit, contact, value, changeHandler, submitHandler }) => {
  return (
    <>
      <th>Name</th>
      <td className={style.tdEdit}>
        <form onSubmit={submitHandler}>
          {edit === "name" ? (
            <input
              name="name"
              type="text"
              value={value.name}
              onChange={changeHandler}
              autocomplete="off"
              autoFocus="true"
            />
          ) : (
            <span>{contact.name}</span>
          )}

          <button name="name" type="submit">
            {edit === "name" ? <p>Save</p> : <BiEdit />}
          </button>
        </form>
      </td>
    </>
  );
};

const EditEmail = ({ edit, contact, value, changeHandler, submitHandler }) => {
  return (
    <>
      <th>Email</th>
      <td className={style.tdEdit}>
        <form form onSubmit={submitHandler}>
          {edit === "email" ? (
            <input
              type="email"
              name="email"
              value={value.email}
              onChange={changeHandler}
              autocomplete="off"
              autoFocus="true"
            />
          ) : (
            <span>
              <a href={`mailto:${contact.email}`}>{contact.email || "-"}</a>
            </span>
          )}

          <button name="email" type="submit">
            {edit === "email" ? <p>Save</p> : <BiEdit />}
          </button>
        </form>
      </td>
    </>
  );
};

const EditPhone = ({ edit, contact, value, changeHandler, submitHandler }) => {
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

  return (
    <>
      <th>Phone</th>
      <td className={style.tdEdit}>
        <form onSubmit={submitHandler}>
          {edit === "phone" ? (
            <input
              name="phone"
              type="tel"
              value={value.phone}
              onChange={changeHandler}
              onKeyDown={checkInput}
              maxLength="11"
              minLength="11"
              autocomplete="off"
              autoFocus="true"
            />
          ) : (
            <a href={`tel:${contact.phone}`}>{contact.phone || "-"}</a>
          )}
          <button name="phone" type="submit">
            {edit === "phone" ? <p>Save</p> : <BiEdit />}
          </button>
        </form>
      </td>
    </>
  );
};
