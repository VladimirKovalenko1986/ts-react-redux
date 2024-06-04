import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { IoLogOut } from "react-icons/io5";

export default function UserMenu() {
  const dispatch = useDispatch();
  const username = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.conteiner}>
      <p className={css.text}>Welcom, {username.name}</p>
      <button className={css.button} onClick={handleLogout} type="button">
        <IoLogOut />
        Logout
      </button>
    </div>
  );
}
