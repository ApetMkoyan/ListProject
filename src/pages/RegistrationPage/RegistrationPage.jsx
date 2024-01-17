import { useDispatch } from "react-redux";
import UseSendRequest from "../../hook/UseSendRequest";
import RegistrationPageStyle from "./RegistrationPage.module.css";
import { NavLink } from "react-router-dom";
import { addNewUser } from "../../store/slices/UsersData/API";
import { generateRandomID } from "../../hook/GenerateRandomId";

const RegistrationPage = () => {
  const { post } = UseSendRequest();
  const dispatch = useDispatch();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const {
      fullName: { value: fullName },
      email: { value: email },
      phone: { value: phone },
      password: { value: password },
    } = e.target;
    const newUser = {
      id: generateRandomID(),
      fullName,
      email,
      phone,
      password,
      posts: [],
    };
    dispatch(addNewUser(newUser));
  };

  return (
    <div className={RegistrationPageStyle.mainRegisterPage}>
      <div className={RegistrationPageStyle.registrationPage}>
        <h1>Create an Account</h1>
        <form onSubmit={handlerSubmit} className={RegistrationPageStyle.RegisterForm}>
          <input type="text" placeholder="Full Name" name="fullName" />
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Phone" name="phone" />
          <input type="text" placeholder="Password" name="password" />
          <button className={RegistrationPageStyle.registerBtn}>Submit</button>
        </form>
        <div>
          <h4>
            Have already Account? <NavLink to="/login">Sign In</NavLink>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
