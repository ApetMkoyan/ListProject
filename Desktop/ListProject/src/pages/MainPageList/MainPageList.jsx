import Appartment from "../../pages/Appartments/Appartments";
import Jobs from "../../pages/Jobs/Jobs";
import Cars from "../../pages/Cars/Cars";
import MainPageListStyle from "./MainPageList.module.css";
const MainPageList = () => {
  return (
    <div className={MainPageListStyle.mainMenuitem_holder}>
      <Appartment />
      <Jobs />
      <Cars />
    </div>
  );
};
export default MainPageList;
