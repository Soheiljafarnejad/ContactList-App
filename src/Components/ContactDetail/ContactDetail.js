import { useLocation, useNavigate } from "react-router-dom";
import style from "./ContactDetail.module.css";
import { BiEdit } from "react-icons/bi";
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

  const submitHandler = (e) => {
    e.preventDefault();
    const type = e.nativeEvent.submitter.name;
    const id = contact.id;
    setEdit(type);
    if (e.nativeEvent.submitter.innerText) {
      if (!value.name) {
        alert("please enter name");
        return;
      }
      onEdit(id, type, value);
      setEdit("");
      history("/");
      return;
    }
  };

  return (
    <form className={`container ${style.contact}`} onSubmit={submitHandler}>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.th}>Detail</th>
            <th className={style.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name</th>
            <td className={style.tdEdit}>
              {edit === "name" ? (
                <input
                  name="name"
                  type="text"
                  value={value.name}
                  onChange={changeHandler}
                />
              ) : (
                contact.name
              )}

              <button name="name" type="submit">
                {edit === "name" ? <p>OK</p> : <BiEdit />}
              </button>
            </td>
          </tr>

          <tr>
            <th>Email</th>
            <td className={style.tdEdit}>
              {edit === "email" ? (
                <input
                  type="email"
                  name="email"
                  value={value.email}
                  onChange={changeHandler}
                />
              ) : (
                contact.email || "-"
              )}

              <button name="email" type="submit">
                {edit === "email" ? <p>OK</p> : <BiEdit />}
              </button>
            </td>
          </tr>

          <tr>
            <th>Phone</th>
            <td className={style.tdEdit}>
              {edit === "phone" ? (
                <input
                  name="phone"
                  type="tel"
                  value={value.phone}
                  onChange={changeHandler}
                  onKeyDown={checkInput}
                  maxLength="11"
                  minLength="11"
                />
              ) : (
                contact.phone || "-"
              )}
              <button name="phone" type="submit">
                {edit === "phone" ? <p>OK</p> : <BiEdit />}
              </button>
            </td>
          </tr>

          <tr>
            <th>Last Update</th>
            <td>{dateFormat}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default ContactDetail;
