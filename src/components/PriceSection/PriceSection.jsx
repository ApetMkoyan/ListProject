import { useDispatch, useSelector } from "react-redux";
import Price from "./PriceSection.module.css";
import { CiSearch } from "react-icons/ci";
import { getPriceRange, selectAppartmentsData } from "../../store/slices/appartamentsSlice/appartmentsSlice";

const PriceSection = () => {
  const { allAppartments, price } = useSelector(selectAppartmentsData);
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const {
      min: { value: min },
      max: { value: max },
    } = e.target;

    const rangePrice = { min, max };
    if (!min) rangePrice.min = 0;
    if (!max) rangePrice.max = 100000000;
    dispatch(getPriceRange(rangePrice));
  };

  return (
    <div className={Price.PriceSection}>
      <div className={Price.priceSectionFirstElemnt}>
        <div className={Price.PriceSectionText}>Price</div>
        <form onSubmit={handlerSubmit} className={Price.PriceSectionInputs}>
          <input type="text" placeholder="from" name="min" />
          <input type="text" placeholder="to" name="max" />
          <button className={Price.buttonRange}><CiSearch/></button>
        </form>
      </div>
      <div className={Price.priceSectionSecondElement}>
        <div className={Price.Currency}>Currency</div>
        <div className={Price.CurrencyInput}>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
