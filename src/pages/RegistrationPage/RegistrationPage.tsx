import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { selectLoading, selectError } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function RegistrationPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  return (
    <div>
      <Title text="Register your account" />
      <RegistrationForm />
      {isLoading && <Loader />}
      {isError && <Error />}
    </div>
  );
}
