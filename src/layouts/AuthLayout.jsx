import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

/**
 * Layout para páginas de autenticação (login, registro, recuperação de senha).
 * Renderiza Header sem Footer.
 * Reservado para futuras telas de auth.
 */
export default function AuthLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
