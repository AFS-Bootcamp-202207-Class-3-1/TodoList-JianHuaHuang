import { Outlet } from "react-router-dom";

export default function NoFoundPage() {
  return (
    <>
      <div className="wrapper">
        <h1>这是个NoFoundPage</h1>
        <Outlet></Outlet>
      </div>
    </>
  );
}
