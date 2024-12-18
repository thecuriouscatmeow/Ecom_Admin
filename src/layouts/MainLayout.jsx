import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Menu/>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default MainLayout;