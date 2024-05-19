import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import css from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.NavLinkContainer}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
