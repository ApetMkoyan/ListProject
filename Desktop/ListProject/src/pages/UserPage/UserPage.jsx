import { useNavigate } from "react-router-dom";
import UserPageStyle from "./UserPage.module.css";
import { MdOutlinePostAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../store/slices/UsersData/UsersDataSlice";


const UserPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector(selectUsersData);
  
  const GoToPostApartment = ()=>{
    navigate ("/postApartment")
  }

  const GoToPostCar = ()=>{
    navigate ("/postCar")
  }

  const GoToPostJob = ()=>{
    navigate ("/postJob")
  }

  return (
    <div className={UserPageStyle.main}>
      <div className={UserPageStyle.userPage}>
        <img src="https://cdn-icons-png.flaticon.com/512/18/18148.png" alt="" />
        <div className={UserPageStyle.userDetails}>
          <h2>{currentUser?.fullName}</h2>
          <p>Email: {currentUser?.email}</p>
          <p>Phone: {currentUser?.phone}</p>
        </div>
        <div className={UserPageStyle.postMaker}>
          <button className={UserPageStyle.postApatmentBtn} onClick={GoToPostApartment}>
            <MdOutlinePostAdd size={24} /> <h3>Post an Apartment</h3>
          </button>
          <button className={UserPageStyle.postCarBtn} onClick={GoToPostCar}>
            <MdOutlinePostAdd size={24} /> <h3>Post a Car</h3>
          </button>
          <button className={UserPageStyle.postJobBtn} onClick={GoToPostJob}>
            <MdOutlinePostAdd size={24} /> <h3>Post a Job</h3>
          </button>
        </div>
        <div className={UserPageStyle.posts}>
          <h3>My Posts</h3>
          <div className={UserPageStyle.allPosts}>
            {currentUser?.posts.map((post) => (
                <div key={post.id} className={UserPageStyle.postsOfUser}>
                  <h4>{post.title}</h4>
                  <h3>{post.price}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
