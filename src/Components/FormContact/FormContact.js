import style from "./FormContact.module.css";
const FormContact = () => {
  return (
    <section className="container">
      <h3>Add Contact</h3>
      <form className={style.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
        <button>Add</button>
      </form>
    </section>
  );
};

export default FormContact;
