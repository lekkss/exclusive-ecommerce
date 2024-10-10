import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Header = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
