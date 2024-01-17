import PostJobStyle from "./PostJob.module.css"
import { useDispatch, useSelector } from "react-redux";
import { generateRandomID } from "../../hook/GenerateRandomId";
import { addNewPost } from "../../store/slices/UsersData/API";
import { MdOutlinePostAdd } from "react-icons/md";
import { selectUsersData } from "../../store/slices/UsersData/UsersDataSlice";

const PostJob = () => {
  const { currentUser } = useSelector(selectUsersData);
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const {
      jobTitle: { value: jobTitle },
      companyName: { value: companyName },
      place: { value: place },
      employmentType: { value: employmentType },
      workSchedule: { value: workSchedule },
      experience: { value: experience },
      jobDescription: { value: jobDescription },
      responsibilities: { value: responsibilities },
      requiredQualifications: { value: requiredQualifications },
      companyInfo: { value: companyInfo },
    } = e.target;
    const newPost = {
      id: generateRandomID(),
      jobTitle,
      companyName,
      place,
      employmentType,
      workSchedule,
      experience,
      jobDescription,
      responsibilities,
      requiredQualifications,
      companyInfo,
    };

    const user = {
      ...currentUser,
      posts: [newPost, ...currentUser?.posts],
    };
    dispatch(addNewPost({ data: user, id: currentUser.id }));
  };


  return (
    <div className={PostJobStyle.main}>
      <div className={PostJobStyle.postSection}>
        <div className={PostJobStyle.postBtn}>
          <MdOutlinePostAdd size={24} /> <h3>Make a Job Post</h3>
        </div>
        <form onSubmit={handlerSubmit} className={PostJobStyle.postJobForm}>
          <input placeholder="Job Title" name="jobTitle" />
          <hr />
          <input placeholder="Company Name" name="companyName" />
          <hr />
          <input placeholder="Place" name="place" />
          <hr />
          <input placeholder="Employment Type" name="employmentType" />
          <hr />
          <input placeholder="Work Schedule" name="workSchedule" />
          <hr />
          <input placeholder="Experience" name="experience" />
          <hr />
          <input placeholder="Job Description" name="jobDescription" />
          <hr />
          <input placeholder="Responsibilities" name="responsibilities" />
          <hr />
          <input placeholder="Required Qualifications" name="requiredQualifications" />
          <hr />
          <input placeholder="Company Info" name="companyInfo" />
          <br />
          <button className={PostJobStyle.postJobBtn}>Post</button>
        </form>
      </div>
    </div>
  )
}


export default PostJob