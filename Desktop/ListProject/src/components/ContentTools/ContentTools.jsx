
import { FaCheck } from "react-icons/fa";

import "./ContentTools.css"

export const ContentTools = () => {
    return (
        <div className="pmain_menu_btns">
            <div className="pmain_menu_btns-btn">
                <div className="pmain_menu_btns-btn-_icon"><FaCheck
                style={{
                        width:"32px",
                        height:"32px",
                        color:"#2bb842"
                }}
                /></div>
                <p className="pmain_menu_btns-btn_name">Add to Top</p>
            </div>
            <div className="pmain_menu_btns-btn">
                <div><FaCheck
                    style={{
                        width: '32px',
                        height: "32px",
                        color: "#2bb842"
                    }} /></div>
                <p>Homepage</p>
            </div>
            <div className="pmain_menu_btns-btn">
                <div><FaCheck
                    style={{
                        width: "32px",
                        height: "32px",
                        color: "#2bb842"
                    }} /></div>
                <p>Label</p>
            </div>
        </div>
    )
}