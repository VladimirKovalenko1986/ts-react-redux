import css from "./Title.module.css";
import { TitleProps } from "../../types/types";

export default function Title({ text }: TitleProps) {
  return <h1 className={css.text}>{text}</h1>;
}
