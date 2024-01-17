import { IoLogoFacebook } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaSquareOdnoklassniki } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";

import SocMediaStyle from "./SocMedia.module.css";

export const SocMedia = () => {
    return (
      <div className={SocMediaStyle.soc_media}>
        <div>
          <CiHeart
            style={{
              width: "28px",
              height: "28px",
            }}
          />
        </div>
        <div>
          <IoLogoFacebook
            style={{
              width: "22px",
              height: "22px",
              color: "#39579a",
            }}
          />
          <SlSocialVkontakte
            style={{
              width: "22px",
              height: "22px",
              color: "#4a74a5",
            }}
          />
          <FaSquareOdnoklassniki
            style={{
              width: "22px",
              height: "22px",
              color: "#f68400",
            }}
          />
          <CgMail
            style={{
              width: "22px",
              height: "22px",
              color: "#6ebe44",
            }}
          />
        </div>
      </div>
    );
}