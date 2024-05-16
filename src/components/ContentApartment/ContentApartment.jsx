import React from "react";
import { FaWalking } from "react-icons/fa";
import "./ContentApartment.css";

const ContentApartment = ({ data }) => {
  return (
    <div>
      <div className="pmain_content_bi">
        <h1 className="pmain_content_title">Building Information</h1>
        <div className="pmain_content_b_i">
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Construction Type</p>
            <p className="pmain_content_bi-value">{data.typeOfAssembly}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">New Construction</p>
            <p className="pmain_content_bi-value">{data.newlyBuilt ? "Yes" : "No"}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Elevator</p>
            <p className="pmain_content_bi-value">{data.elevator ? "Available" : "Not available"}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Floors in the Building</p>
            <p className="pmain_content_bi-value">{data.numberOfFloors}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">The House Has</p>
            <p className="pmain_content_bi-value">{data.appliances}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Parking</p>
            <p className="pmain_content_bi-value">{data.parking ? "Available" : "Not available"}</p>
          </div>
        </div>
      </div>
      <div className="pmain_content_bi">
        <h1 className="pmain_content_title">Apartment Information</h1>
        <div className="pmain_content_b_i">
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Floor Area</p>
            <p className="pmain_content_bi-value">{data.totalArea}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Number of Rooms</p>
            <p className="pmain_content_bi-value">{data.numberOfRooms}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Floor</p>
            <p className="pmain_content_bi-value">{data.floor}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Ceiling Height</p>
            <p className="pmain_content_bi-value">{data.ceilingHeight}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Furniture</p>
            <p className="pmain_content_bi-value">{data.furniture ? "Available" : "Not available"}</p>
          </div>
          <div className="pmain_content_bi-">
            <p className="pmain_content_bi-key">Balcony</p>
            <p className="pmain_content_bi-value">{data.balcony ? "Available" : "Not available"}</p>
          </div>
        </div>
        <div className="pmain_content_bi">
          <h1 className="pmain_content_title">Description</h1>
          <div className="pmain_content_bi__desc">{data.description}</div>
        </div>
        <div className="pmain_content_bi">
          <h1 className="pmain_content_title">Places Nearby</h1>
          <div className="pmain_content_bi_places">
            <p className="pmain_content_bi_nearbyplaces">{data.nearbyPlaces}</p>
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
};

export default ContentApartment;
