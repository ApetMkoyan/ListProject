import { NavLink } from 'react-router-dom';
import ListStyle from "./List.module.css"
import { BsHouse } from "react-icons/bs";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { CgToolbox } from "react-icons/cg";
import { LuCar } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { PiPawPrintBold } from "react-icons/pi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";


const List = () =>{
    return (
      <div className={ListStyle.mainList}>
        <h1>AuToon</h1>
        <div className={ListStyle.list}>
          <NavLink to="apartments">
            <BsHouse color="white" size={20} /> Houses
          </NavLink>
          <NavLink to="cars">
            <LuCar color="white" size={20} /> Transport
          </NavLink>
          <NavLink to="jobs">
            <CgToolbox color="white" size={20} /> Jobs
          </NavLink>
          <NavLink>
            <HiOutlineWrenchScrewdriver color="white" size={20} /> Technique
          </NavLink>
          <NavLink>
            <PiPlant color="white" size={20} /> Plants
          </NavLink>
          <NavLink>
            <PiPawPrintBold color="white" size={20} /> Animals
          </NavLink>
          <NavLink>
            <AiOutlineCustomerService color="white" size={20} /> Service
          </NavLink>
          <NavLink>
            <IoFastFoodOutline color="white" size={20} /> Food
          </NavLink>
        </div>
      </div>
    );
}

export default List