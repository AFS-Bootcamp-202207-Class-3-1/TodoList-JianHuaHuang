import { Outlet, NavLink } from "react-router-dom";
import "./layout.css";

// import { Button } from 'antd';
// const { Header, Content, Footer } = Layout;

let activeStyle = {
    fontWeight: "bold",
    color: "red",
  };


export default function Layout() {
  return (
    <>
      <nav
        className="wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: "30px",
          fontSize: "medium"
        }}
      >
        <NavLink
          className="linkStyle"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          className="linkStyle"
          to="/help"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Help
        </NavLink>
        <NavLink
          className="linkStyle"
          to="/done"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          page
        </NavLink>

        {/* <Button type="primary">Button</Button> */}
      </nav>
      <Outlet></Outlet>
    </>
  );
}
