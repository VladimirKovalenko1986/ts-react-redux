import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
    return clsx(isActive && css.active);
  };

  return (
    <div className={css.conteiner}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
