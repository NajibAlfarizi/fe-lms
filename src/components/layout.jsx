import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";

export default function LayoutDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
