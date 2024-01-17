import RealEstatePageContentFilter from "../../components/RealEstatePageContentFilter/RealEstatePageContentFilter"
import ApartmentsPageStyle from "./ApartmentsPage.module.css"
import Appartment from "../Appartments/Appartments"
import { NavLink } from "react-router-dom"

const ApartmentsPage =()=>{
    
    return(
        <div className={ApartmentsPageStyle.main}>
            <div className={ApartmentsPageStyle.MovingRealEstate}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink className={ApartmentsPageStyle.homeMovingLink}>Real Estate</NavLink>
            </div>
            <div>
                <RealEstatePageContentFilter/>
                <Appartment/>
            </div>
        </div>
    )
}

export default ApartmentsPage;