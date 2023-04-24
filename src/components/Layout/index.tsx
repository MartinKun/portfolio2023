import Header from "../Header";
import { Outlet } from "react-router-dom";
import "./index.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Layout = () => {
  const { isLightOn } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div className={`layout ${isLightOn ? "light" : "dark"}`}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
