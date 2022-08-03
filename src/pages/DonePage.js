import { Outlet } from "react-router-dom";
import DoneTodoList from "../features/doneTodoList/DoneTodoList";

export default function DonePage() {
  return (
    <>
      <div className="wrapper">
        <h1>这是个DonePage</h1>
      </div>

      <DoneTodoList></DoneTodoList>
      <Outlet></Outlet>
    </>
  );
}
