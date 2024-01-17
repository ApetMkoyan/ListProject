import categories from "./CategoriesSection.module.css"
import { NavLink } from "react-router-dom";

const CategoriesSection = ()=>{
    return(
        <div className={categories.CategoriesSectionHolder}>
            <div className={categories.CategoriesText}>
                Categories
            </div>
            <div className={categories.CategoriesHolder}>
                <div className={categories.Categories}>
                    <div className={categories.CategoriesTitle}>
                        Real Estate
                    </div>
                    <div className={categories.LongTermRentals}>
                        <div>
                            Long Term Rentals
                            <NavLink>Apartments</NavLink>
                            <NavLink> Houses</NavLink>
                            <NavLink> Rooms</NavLink>
                            <NavLink>Commercial Properties</NavLink>
                            <NavLink> Land</NavLink>
                            <NavLink>Garages and Parking</NavLink>
                            <NavLink>Trailers and Booths</NavLink>
                        </div>
                    </div>
                    <div className={categories.DailyRentals}>
                        Daily Rentals
                        <NavLink>Apartments</NavLink>
                        <NavLink>Houses</NavLink>
                        <NavLink>Rooms</NavLink>
                        <NavLink>Event Venues</NavLink>
                    </div>
                    <div className={categories.forSale}>
                        For Sale
                        <NavLink>Apartments</NavLink>
                        <NavLink>Houses</NavLink>
                        <NavLink>Commercial Properties</NavLink>
                        <NavLink>Land</NavLink>
                        <NavLink>Garages and Parking</NavLink>
                        <NavLink>Trailers and Booths</NavLink>
                    </div>
                    <div className={categories.NewConstruction}>
                        New Construction
                        <NavLink>Apartments</NavLink>
                        <NavLink>Houses</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesSection;