import LoginForm from "../../components/LoginForm/LoginForm";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { selectLoading, selectError } from "../../redux/auth/selectors";

export default function LoginPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  return (
    <div>
      <Title text="Log in to your account" />
      <LoginForm />
      {isLoading && <Loader />}
      {isError && <Error />}
    </div>
  );
}
