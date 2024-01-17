import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import AppartmentsStyle from "./Appartments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAppartmentsData } from "../../store/slices/appartamentsSlice/API";
import { selectAppartmentsData } from "../../store/slices/appartamentsSlice/appartmentsSlice";

const Appartment = () => {
  const dispatch = useDispatch();
  const { allAppartments, price } = useSelector(selectAppartmentsData);
  useEffect(() => {
    dispatch(getAppartmentsData());
  }, []);
  
  const data = allAppartments.filter((el)=>el.price >= price.min && el.price <= price.max)


  return (
    <div className={AppartmentsStyle.main}>
      <div>
        <NavLink className={AppartmentsStyle.main_a}>
          <h3 className={AppartmentsStyle.name_holder}>Appartments</h3>
          <BsChevronRight className={AppartmentsStyle.h1_icon} />
        </NavLink>
      </div>

      <div className={AppartmentsStyle.appartments_holder}>
        {data.map((appartment, index) => {
          return (
            <div className={AppartmentsStyle.appartments} key={index}>
              <NavLink to={`/house/${appartment.id}/${appartment.title}`}>
                <img src={appartment.images[0]} />
                <div className={AppartmentsStyle.appartments_item}>
                  <div className={AppartmentsStyle.appartment_price}>${appartment.price}</div>
                  <div className={AppartmentsStyle.appartment_description}>{appartment.description}</div>
                  <div className={AppartmentsStyle.appartment_totalarea}>{appartment.totalArea}sq. m. </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appartment;
