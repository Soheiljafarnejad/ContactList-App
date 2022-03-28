import style from "./FormContact.module.css";
const FormContact = () => {
  return (
    <section>
      <h3>Add Contact</h3>
      <form className={style.form}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />

        <label htmlFor="text">Text</label>
        <input type="text" id="text" placeholder="Text" />

        <button>Add</button>
      </form>
    </section>
  );
};

export default FormContact;
