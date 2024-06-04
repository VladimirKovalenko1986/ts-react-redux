import { useSelector } from "react-redux";
import { selectIsLoggedId } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedId);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
