import Header from "../Header";
import { Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
