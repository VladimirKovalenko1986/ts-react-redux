import css from "./HomePage.module.css";
import Title from "../../components/Title/Title";

export default function HomePage() {
  return (
    <div className={css.conteiner}>
      <Title text="My fevorite contacts" />
      <p className={css.text}>
        My favorite contact apps are those I carefully select and keep for my
        personal use. They help me organize my contacts, store important
        information, and always stay connected with my loved ones and
        colleagues. Today, I want to share these amazing apps with you. They
        will simplify your life and help you better organize your contacts.
      </p>
    </div>
  );
}
