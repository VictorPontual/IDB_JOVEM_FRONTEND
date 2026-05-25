import { Outlet } from "react-router-dom";
import AdminSidebar from "../pages/Admin/components/AdminSidebar";

/**
 * Layout administrativo — puramente visual.
 * A proteção de rota (auth) é feita pelo AdminRoute.
 */
export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#FDF3EA]">
      <AdminSidebar />
      <main className="flex-1 ml-[240px] p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
