import { Slider } from "../../components/Slider/Slider";
import { SocMedia } from "../../components/SocMedia/SocMedia";
import { Crumb } from "../../components/Crumb/Crumg";
import { DescriptionApartment } from "../../components/DescriptionApartment/DescriptionApartment";
import Content from "../../components/ContentApartment/ContentApartment";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { ContentTools } from "../../components/ContentTools/ContentTools";
import { Recomendation } from "../../components/Recomendation/Recomendation";
import MainStyle from "./CurrentApartment.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentAppartment } from "../../store/slices/appartamentsSlice/API";
import { selectAppartmentsData } from "../../store/slices/appartamentsSlice/appartmentsSlice";

const CurrentApartment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentAppartment } = useSelector(selectAppartmentsData);

  useEffect(() => {
    dispatch(getCurrentAppartment(id));
  }, []);

  return (
    <div className={MainStyle.main}>
      <SocMedia />
      <div className={MainStyle.pmain}>
        <Crumb />
        <div className={MainStyle.p_main}>
          <div className={MainStyle.pmain_content}>
            <Slider data={currentAppartment} />
            <DescriptionApartment data={currentAppartment} />
            <Content data={currentAppartment} />
          </div>
          <div className={MainStyle.pmain_menu}>
            <UserInfo />
            <ContentTools />
            <Recomendation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentApartment;
