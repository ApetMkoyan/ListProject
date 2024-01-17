import { FaLocationDot } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";

import "./ContentCar.css"

const ContentCar = ({car}) => {
    return (
      <div>
        <div className="pmain_content_bi">
          <h1 className="pmain_content_title">Building Information</h1>
          <div className="pmain_content_b_i">
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Car Brand</p>
              <p className="pmain_content_bi-value">{car.carBrand}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Car Model</p>
              <p className="pmain_content_bi-value">{car.carModel}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">is Customs Cleared</p>
              <p className="pmain_content_bi-value">{car.isCustomsCleared === true ? "Yes" : "No"}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Engine Capacity</p>
              <p className="pmain_content_bi-value">{car.engineCapacity}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">The House Has</p>
              <p className="pmain_content_bi-value">{car.appliances}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Vehicle Type</p>
              <p className="pmain_content_bi-value">{car.vehicleType}</p>
            </div>
          </div>
        </div>
        <div className="pmain_content_bi">
          <h1 className="pmain_content_title">Car Information</h1>
          <div className="pmain_content_b_i">
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Transmission</p>
              <p className="pmain_content_bi-value">{car.transmission}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">State</p>
              <p className="pmain_content_bi-value">{car.state}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Wheel</p>
              <p className="pmain_content_bi-value">{car.wheel}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Color</p>
              <p className="pmain_content_bi-value">{car.color}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Towing</p>
              <p className="pmain_content_bi-value">{car.furniture === true ? "Yes" : "No"}</p>
            </div>
            <div className="pmain_content_bi-">
              <p className="pmain_content_bi-key">Headlights</p>
              <p className="pmain_content_bi-value">{car.headlights}</p>
            </div>
          </div>
          <div className="pmain_content_bi">
            <h1 className="pmain_content_title">Description</h1>
            <div className="pmain_content_bi__desc"> {car.carDescription} </div>
          </div>
          <div className="pmain_content_bi">
            <h1 className="pmain_content_title">Year</h1>
            <div className="pmain_content_bi_places">
              <p className="pmain_content_bi_nearbyplaces">{car.year}</p>
              <div className="pmain_content_bi_places-walk">
                <p>1 km</p>
                <p>
                  <FaWalking />
                </p>
                <p>5 - 10min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContentCar