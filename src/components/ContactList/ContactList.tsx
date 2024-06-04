import ContacItem from "../Contact/ContacItem";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { Contact } from "../../types/types";

const ContactList: React.FC = () => {
  const contacts = useSelector(selectFilteredContacts) as Contact[];

  return (
    <ul className={css.conteiner}>
      {contacts.map((item) => (
        <li key={item.id}>
          <ContacItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
