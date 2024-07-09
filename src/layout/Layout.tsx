import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
    const location = useLocation();

    const isHome = location.pathname === "/";
    const isLoginRegister = location.pathname === "/login" || location.pathname === "/register"

    const headerClassName = isHome? "bg-opacity-30" : "";    
    const showHeaderFooter = !isLoginRegister;
    return (
        <>
            {showHeaderFooter && <Header bgHeader={headerClassName} />}
            <Outlet />
            {showHeaderFooter && <Footer />}
        </>
  )
}

export default Layout;