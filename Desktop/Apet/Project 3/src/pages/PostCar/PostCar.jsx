import PostCarStyle from "./PostCar.module.css"
import { CiImageOn } from "react-icons/ci";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomID } from "../../hook/GenerateRandomId";
import { addNewPost } from "../../store/slices/UsersData/API";
import { MdOutlinePostAdd } from "react-icons/md";
import { selectUsersData } from "../../store/slices/UsersData/UsersDataSlice";

const PostCar = () => {
    const [newPostImg, setNewPostImg] = useState("");
    const { currentUser } = useSelector(selectUsersData);
    const dispatch = useDispatch();
  
    const handlerSubmit = (e) => {
      e.preventDefault();
      const {
        carBrand: { value: carBrand },
        carModel: { value: carModel },
        distance: { value: distance },
        place: { value: place },
        price: { value: price },
        year: { value: year },
        vehicleType: { value: vehicleType },
        engine: { value: engine },
        engineCapacity: { value: engineCapacity },
        transmission: { value: transmission },
        towing: { value: towing },
        state: { value: state },
        wheel: { value: wheel },
        isCustomsCleared: { value: isCustomsCleared },
        color: { value: color },
        headlights: { value: headlights },
        interiorColor: { value: interiorColor },
        interior: { value: interior },
        hatch: { value: hatch },
        carDescription: { value: carDescription },
    } = e.target;
    
      const newPost = {
        id: generateRandomID(), carBrand, carModel, distance, place, price, year, vehicleType, engine, engineCapacity, transmission, towing, state, wheel, isCustomsCleared, color, headlights, interiorColor, interior, hatch, carDescription, images: [newPostImg],
      };
  
      const user = {
        ...currentUser,
        posts: [newPost, ...currentUser?.posts],
      };
      dispatch(addNewPost({ data: user, id: currentUser.id }));
    };
    const postNewImg = (e) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setNewPostImg(reader.result);
      };
    };
  
    return(
        <div className={PostCarStyle.main}>
            <div className={PostCarStyle.postSection}>
            <div className={PostCarStyle.postBtn}>
                <MdOutlinePostAdd size={24} /> <h3>Make a Car Post</h3>
            </div>
            <form onSubmit={handlerSubmit} className={PostCarStyle.postCarForm}>
                <input placeholder="Car Brand" name="carBrand" />
                <hr />
                <input placeholder="Car Model" name="carModel" />
                <hr />
                <input placeholder="Distance" name="distance" />
                <hr />
                <input placeholder="Place" name="place" />
                <hr />
                <input placeholder="Price" name="price" />
                <hr />
                <input placeholder="Year" name="year" />
                <hr />
                <input placeholder="Vehicle Type" name="vehicleType" />
                <hr />
                <input placeholder="Engine" name="engine" />
                <hr />
                <input placeholder="Engine Capacity" name="engineCapacity" />
                <hr />
                <input placeholder="Transmission" name="transmission" />
                <hr />
                <input placeholder="Towing" name="towing" />
                <hr />
                <input placeholder="State" name="state" />
                <hr />
                <input placeholder="Wheel" name="wheel" />
                <hr />
                <input placeholder="Is Customs Cleared" name="isCustomsCleared" />
                <hr />
                <input placeholder="Color" name="color" />
                <hr />
                <input placeholder="Headlights" name="headlights" />
                <hr />
                <input placeholder="Interior Color" name="interiorColor" />
                <hr />
                <input placeholder="Interior" name="interior" />
                <hr />
                <input placeholder="Hatch" name="hatch" />
                <hr />
                <input placeholder="Car Description" name="carDescription" />
                <hr />
                <label className={PostCarStyle.fileInputLabel}>
                  <CiImageOn className={PostCarStyle.fileIcon} />
                  <input type="file" onChange={postNewImg} className={PostCarStyle.fileInput} />
                </label>                
                <br />                
                <button className={PostCarStyle.postCarBtn}>Post</button>
            </form>
            </div> 
        </div>
    )
}


export default PostCar