import RealEstatePageContentFilter from "../../components/RealEstatePageContentFilter/RealEstatePageContentFilter"
import CarsPageStyle from "./CarsPage.module.css"
import Cars from "../Cars/Cars"
import { NavLink } from "react-router-dom"

const CarsPage =()=>{
    
    return(
        <div className={CarsPageStyle.main}>
             <div className={CarsPageStyle.MovingCars}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink className={CarsPageStyle.CarMovingLink}>Cars</NavLink>
            </div>
            <div>
                <RealEstatePageContentFilter/>
                <Cars/>
            </div>
        </div>
    )
}

export default CarsPage;