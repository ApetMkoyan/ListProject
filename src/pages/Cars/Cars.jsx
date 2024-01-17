import { useEffect, useState } from "react";
import CarsStyle from "./Cars.module.css";

import { BsChevronRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCarsData } from "../../store/slices/CarsDataSlice/carsSlice";
import { getCarsData } from "../../store/slices/CarsDataSlice/API";

const Cars = () => {
  const dispach = useDispatch();
  const { allCars } = useSelector(selectCarsData);

  useEffect(() => {
    dispach(getCarsData());
  }, []);

  return (
    <div className={CarsStyle.main}>
      <div>
        <NavLink className={CarsStyle.main_a}>
          <h1>Cars</h1>
          <BsChevronRight className={CarsStyle.h1_icon} />
        </NavLink>
      </div>

      <div className={CarsStyle.carsItem_holder}>
        {allCars.map((car, index) => {
          return (
            <div className={CarsStyle.cars} key={index}>
              <NavLink to={`/cars/${car.id}/${car.carBrand}`}>
                <img src={car.images[0]} />
                <div className={CarsStyle.cars_item}>
                  <div className={CarsStyle.car_price}>${car.price}</div>
                  <div className={CarsStyle.car_description}>
                    <p>
                      {car.year},{car.carBrand},{car.carModel},{car.engineCapacity}L,{car.wheel}
                    </p>
                  </div>
                  <div className={CarsStyle.car_desc2}>
                    <span>{car.year}y.,</span>
                    <span>{car.distance}km</span>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cars;
