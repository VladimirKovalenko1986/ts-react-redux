import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilterName,
  changeFilterNumber,
} from "../../redux/filters/slice";
import {
  selectFilterName,
  selectFilterNumber,
} from "../../redux/filters/selectors";

export default function SearchBox() {
  const sortIdName = useId();
  const sortIdNubber = useId();
  const filterName = useSelector(selectFilterName);
  const filterNumber = useSelector(selectFilterNumber);
  const dispatch = useDispatch();

  return (
    <div className={css.conteiner}>
      <div className={css.wrapper}>
        <label htmlFor={sortIdName}>Find contacts by name</label>
        <input
          type="text"
          value={filterName}
          className={css.input}
          id={sortIdName}
          onChange={(e) => dispatch(changeFilterName(e.target.value))}
        />
      </div>
      <div className={css.wrapper}>
        <label htmlFor={sortIdNubber}>Find contacts by number</label>
        <input
          type="text"
          value={filterNumber}
          className={css.input}
          id={sortIdNubber}
          onChange={(e) => dispatch(changeFilterNumber(e.target.value))}
        />
      </div>
    </div>
  );
}
