import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { selectIsLoggedId } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function AppBar() {
  const isLoggedId = useSelector(selectIsLoggedId);
  return (
    <header className={css.conteiner}>
      <Navigation />
      {isLoggedId ? <UserMenu /> : <AuthNav />}
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
}
