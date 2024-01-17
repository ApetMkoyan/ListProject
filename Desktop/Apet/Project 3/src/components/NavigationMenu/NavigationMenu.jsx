import Flag from "react-world-flags";
import NavigationMenuStyle from "./NavigationMenu.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { CgToolbox } from "react-icons/cg";
import { LuCar } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { PiPawPrintBold } from "react-icons/pi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin, CiUser, CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "../../store/slices/UsersData/UsersDataSlice";
import { fetchLogin, fetchLoginOut } from "../../store/slices/UsersData/API";

const NavigationMenu = () => {
  const { currentUser } = useSelector(selectUsersData);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlerLogOut = () => {
    dispatch(fetchLoginOut({}));
    navigate("/login");
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${NavigationMenuStyle.navigate} ${scrolling ? NavigationMenuStyle.scrolled : ""}`}>
      <nav>
        <button className={NavigationMenuStyle.bars} onClick={toggleMenu}>
          <FaBars color="gray" size={30} />
        </button>
        <div className={NavigationMenuStyle.logoInput}>
          <CiSearch />
          <input type="text" placeholder="search" />
        </div>
        <div className={NavigationMenuStyle.buttons}>
          <NavLink to="/">
            <IoHomeOutline />
          </NavLink>
          {currentUser?.id ? (
              <button className={NavigationMenuStyle.loginLogo} onClick={handlerLogOut}><CiLogin/></button>
          ) : (
            <NavLink to="/register">
              <CiUser />
            </NavLink>
          )}
        </div>
        <Flag code="US" style={{ width: "28px", height: "15px", borderRadius: "0" }} />
      </nav>

      {menuOpen && (
        <div className={NavigationMenuStyle.openedMenu}>
          <NavLink to="apartments">
            <BsHouse color="gray" size={20} /> Houses
          </NavLink>
          <NavLink to="cars">
            <LuCar color="gray" size={20} /> Transport
          </NavLink>
          <NavLink to="jobs">
            <CgToolbox color="gray" size={20} /> Jobs
          </NavLink>
          <NavLink>
            <HiOutlineWrenchScrewdriver color="gray" size={20} /> Technique
          </NavLink>
          <NavLink>
            <PiPlant color="gray" size={20} /> Plants
          </NavLink>
          <NavLink>
            <PiPawPrintBold color="gray" size={20} /> Animals
          </NavLink>
          <NavLink>
            <AiOutlineCustomerService color="gray" size={20} /> Service
          </NavLink>
          <NavLink>
            <IoFastFoodOutline color="gray" size={20} /> Food
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
