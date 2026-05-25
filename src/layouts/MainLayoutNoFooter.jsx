import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

/** Layout público sem Footer — usado na tela de login */
export default function MainLayoutNoFooter() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
