import React from "react";
import List from "../List/List";
import VerticalSlider from "../VerticalSlider/VerticalSlider";
import MainPageStyle from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={MainPageStyle.mainPage}>
      <VerticalSlider />
      <List />
    </div>
  );
};

export default MainPage;
