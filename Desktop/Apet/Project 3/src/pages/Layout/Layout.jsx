import { Outlet } from "react-router-dom";
// import Footer from "../../components/Footer/Footer";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

const Layout = () => {
    return(
        <>
            <NavigationMenu/>
            <Outlet/>
            {/* <Footer/> */}
        </>
    )
};

export default Layout