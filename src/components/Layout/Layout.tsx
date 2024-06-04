import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
import { LayoutProps } from "../../types/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={css.conteiner}>
      <AppBar />
      {children}
    </main>
  );
};

export default Layout;
