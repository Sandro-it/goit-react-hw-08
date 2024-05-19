import Navigation from "../navigation/Navigation";
import AuthNav from "../authNav/AuthNav";
import useAuth from "../../hooks/UseAuth";
import UserMenu from "../userMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <div className={css.AppBarNav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
