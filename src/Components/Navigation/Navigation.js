import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const items = [
    { to: "/", title: "Home" },
    { to: "/new-contact", title: "New Contact" },
    { to: "/about-me", title: "About me" },
  ];

  return (
    <nav className={style.navigation}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                className={(e) => `${e.isActive ? `${style.activeLink}` : ""}`}
                to={item.to}
              >
                <h3>{item.title}</h3>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
