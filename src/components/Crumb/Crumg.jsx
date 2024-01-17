import { CiFlag1 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import "./Crumb.css"

export const Crumb = () => {
    return (
        <div className="pmain_crumb">
            <div className="pmain_crumb_">
                <p>Home <FaAngleRight /></p>
                <p>Real Estate <FaAngleRight /> </p>
                <p>For Sale <FaAngleRight /></p>
                <p>Houses</p>
            </div>

            <div className="pmain_crumb_report">
                <CiFlag1 />
                <p>Report</p>
            </div>
        </div>
    )
}