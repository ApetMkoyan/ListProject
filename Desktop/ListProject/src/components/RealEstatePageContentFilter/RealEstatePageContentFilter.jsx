import PriceSection from "../PriceSection/PriceSection";
import filter from"./RealEstatePageContentFilter.module.css"
import CategoriesSection from "../CategoriesSection/CategoriesSection";

const RealEstatePageContentFilter = ()=>{
    return(
        <div className={filter.RealEstatePageContentFilterHolder}>
            <PriceSection/>
            <CategoriesSection/>
        </div>
    )
}

export default RealEstatePageContentFilter;