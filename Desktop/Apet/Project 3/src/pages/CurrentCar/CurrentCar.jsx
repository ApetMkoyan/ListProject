import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContentCar from "../../components/ContentCar/ContentCat";
import { ContentTools } from "../../components/ContentTools/ContentTools";
import { Crumb } from "../../components/Crumb/Crumg";
import { DescriptionCar } from "../../components/DescriptionCar/DescriptionCar";
import { Recomendation } from "../../components/Recomendation/Recomendation";
import { SocMedia } from "../../components/SocMedia/SocMedia";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { getCurrentCar } from "../../store/slices/CarsDataSlice/API";
import { selectCarsData } from "../../store/slices/CarsDataSlice/carsSlice";
import CurrentCarStyle from "./CurrentCar.module.css";
import { Slider } from "../../components/Slider/Slider";

const CurrentCar = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { currentCar } = useSelector(selectCarsData);
  console.log(currentCar);
  console.log(id);

  useEffect(() => {
    dispatch(getCurrentCar(id));
  }, [id]);

  return (
    <div className={CurrentCarStyle.main}>
      <SocMedia />
      <div className={CurrentCarStyle.pmain}>
        <Crumb />
        <div className={CurrentCarStyle.p_main}>
          <div className={CurrentCarStyle.pmain_content}>
            <Slider data={currentCar} />
            <DescriptionCar car={currentCar} />
            <ContentCar car={currentCar} />
          </div>
          <div className={CurrentCarStyle.pmain_menu}>
            <UserInfo />
            <ContentTools />
            <Recomendation />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentCar;
