import css from "./ContacItem.module.css";
import { BsTelephoneFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import MyModalDelete from "../MyModalDelete/MyModalDelete";
import MyModalEdit from "../MyModalEdit/MyModalEdit";
import { ContactProps } from "../../types/types";

const ContacItem: React.FC<ContactProps> = ({ data }) => {
  const { id, name, number } = data;
  return (
    <div className={css.conteiner}>
      <div>
        <div className={css.wrapper}>
          <BsTelephoneFill />
          <p>{name}</p>
        </div>
        <div className={css.wrapper}>
          <FaUserAlt />
          <p>{number}</p>
        </div>
      </div>
      <div className={css.wrapperModal}>
        <MyModalDelete contactId={id} />
        <MyModalEdit contactId={id} />
      </div>
    </div>
  );
};

export default ContacItem;
