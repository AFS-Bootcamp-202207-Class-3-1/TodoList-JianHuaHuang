import { Outlet } from "react-router-dom";

export default function HelpPage() {
  return (
    <>
      <div className="wrapper">
        <h1>这是个HelpPage</h1>
        <Outlet></Outlet>
      </div>
    </>
  );
}
