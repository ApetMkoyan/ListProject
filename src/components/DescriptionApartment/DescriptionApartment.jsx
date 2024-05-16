import DescriptionApartmentStyle from "./DescriptionApartment.module.css"

export const DescriptionApartment = ({ data }) => {
    return (
        <div className={DescriptionApartmentStyle.pmain_content_descr}>
            <div className={DescriptionApartmentStyle.pmain_content_description}>
                <h1 className={DescriptionApartmentStyle.pmain_content_description_desc}>{data.title}</h1>
                <p className={DescriptionApartmentStyle.pmain_content_description_price}>${data.price}</p>
            </div>
        </div>

    )
}