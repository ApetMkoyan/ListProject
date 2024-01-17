import PostApartmentStyle from "./PostApartment.module.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomID } from "../../hook/GenerateRandomId";
import { addNewPost } from "../../store/slices/UsersData/API";
import { MdOutlinePostAdd } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { selectUsersData } from "../../store/slices/UsersData/UsersDataSlice";

const PostApatment = () => {
    const [newPostImg, setNewPostImg] = useState("");
    const { currentUser } = useSelector(selectUsersData);
    const dispatch = useDispatch();
  
    const handlerSubmit = (e) => {
      e.preventDefault();
      const {
        title: { value: title },
        price: { value: price },
        type: { value: type },
        typeOfAssembly: { value: typeOfAssembly },
        newlyBuilt: { value: newlyBuilt },
        elevator: { value: elevator },
        numberOfFloors: { value: numberOfFloors },
        totalArea: { value: totalArea },
        numberOfRooms: { value: numberOfRooms },
        ceilingHeight: { value: ceilingHeight },
        floor: { value: floor },
        balcony: { value: balcony },
        furniture: { value: furniture },
        repair: { value: repair },
        appliances: { value: appliances },
        view: { value: view },
        description: { value: description },
        nearbyPlaces: { value: nearbyPlaces },
    } = e.target;

      const newPost = {
        id: generateRandomID(), title, price, type, typeOfAssembly, newlyBuilt, elevator, numberOfFloors, totalArea, numberOfRooms, ceilingHeight, floor, balcony, furniture, repair, appliances, view, description, nearbyPlaces, images: [newPostImg],
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
        <div className={PostApartmentStyle.main}>
            <div className={PostApartmentStyle.postSection}>
            <div className={PostApartmentStyle.postBtn}>
                <MdOutlinePostAdd size={24} /> <h3>Make an Apartment Post</h3>
            </div>
            <form onSubmit={handlerSubmit} className={PostApartmentStyle.postApartmentForm}>
                <input placeholder="Title" name="title" />
                <hr />
                <input placeholder="Price" name="price" />
                <hr />
                <input placeholder="Type" name="type" />
                <hr />
                <input placeholder="Type Of Assembly" name="typeOfAssembly" />
                <hr />
                <input placeholder="Newly Built" name="newlyBuilt" />
                <hr />
                <input placeholder="Elevator" name="elevator" />
                <hr />
                <input placeholder="Number Of Floors" name="numberOfFloors" />
                <hr />
                <input placeholder="Total Area" name="totalArea" />
                <hr />
                <input placeholder="Number Of Rooms" name="numberOfRooms" />
                <hr />
                <input placeholder="Ceiling Height" name="ceilingHeight" />
                <hr />
                <input placeholder="Floor" name="floor" />
                <hr />
                <input placeholder="Balcony" name="balcony" />
                <hr />
                <input placeholder="Furniture" name="furniture" />
                <hr />
                <input placeholder="Repair" name="repair" />
                <hr />
                <input placeholder="Appliances" name="appliances" />
                <hr />
                <input placeholder="View" name="view" />
                <hr />
                <input placeholder="Description" name="description" />
                <hr />
                <input placeholder="Nearby Places" name="nearbyPlaces" />
                <hr />
                 <label className={PostApartmentStyle.fileInputLabel}>
                  <CiImageOn className={PostApartmentStyle.fileIcon} />
                  <input type="file" onChange={postNewImg} className={PostApartmentStyle.fileInput} />
                </label>                
                <br />
                <button className={PostApartmentStyle.postApartmentBtn}>Post</button>
            </form>
            </div> 
        </div>
    )
}


export default PostApatment