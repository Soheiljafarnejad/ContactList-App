import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const items = [
    { to: "/", title: "Home" },
    { to: "/new-contact", title: "New Contact" },
    { to: "/about-me", title: "About me" },
  ];

  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <section className={`${toggle ? style.toggle : ""}`}>
      <button onClick={clickHandler} className={style.menu}>
        <div className={style.one}></div>
        <div className={style.two}></div>
        <div className={style.there}></div>
      </button>
      <nav className={style.navigation}>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  className={(e) =>
                    `${e.isActive ? `${style.activeLink}` : ""}`
                  }
                  to={item.to}
                  onClick={() => setToggle(false)}
                >
                  <h3>{item.title}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
