import Title from "../../components/Title/Title";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";
import { AppDispatch } from "../../redux/store";

export default function Contacts() {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.conteiner}>
      <Title text="Phonebook" />
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ContactList />
    </div>
  );
}
