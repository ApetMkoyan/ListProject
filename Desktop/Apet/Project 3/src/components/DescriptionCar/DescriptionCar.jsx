import { FaLocationDot } from "react-icons/fa6";

import DescriptionCarStyle from "./DescriptionCar.module.css"

export const DescriptionCar =  ({car}) => {
    return (
       <div className = {DescriptionCarStyle.pmain_content_descr}>
        
          
                    <div className={DescriptionCarStyle.pmain_content_description}>
                            <h1 className={DescriptionCarStyle.pmain_content_description_desc}>{car.carBrand} {car.carModel}</h1>
                            <div className={DescriptionCarStyle.pmain_content_description_loc}><FaLocationDot /><p>{car.place}</p> </div>
                            <p className={DescriptionCarStyle.pmain_content_description_price}>${car.price}</p>
                        </div>
                
            
        
        </div>
   
    )}

