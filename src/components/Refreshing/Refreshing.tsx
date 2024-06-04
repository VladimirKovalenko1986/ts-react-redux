import { Audio } from "react-loader-spinner";
import css from "./Refreshing.module.css";

export default function Refreshing() {
  return (
    <div className={css.conteiner}>
      <Audio
        height="100"
        width="100"
        radius="15"
        color="blue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
