import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginPageStyle from "./LoginPage.module.css";
import { login, selectUsersData } from "../../store/slices/UsersData/UsersDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../store/slices/UsersData/API";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(selectUsersData);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const {
      EmailOrPhone: { value: EmailOrPhone },
      Password: { value: Password },
    } = e.target;

    const checkUser = { EmailOrPhone, Password };

    const check = () => {
      const user =
        users.find(
          (el) =>
            (el.phone === EmailOrPhone || el.email === EmailOrPhone) &&
            el.password === Password
        ) || null;
      if (user) {
        return user;
      } else {
        return null;
      }
    };

    const user = check();

    if (user) {
      dispatch(login(user));
      dispatch(fetchLogin(user));
      navigate("/userpage");
    } else {
      alert("User Not Found");
    }
  };

  return (
    <div className={LoginPageStyle.mainLoginPage}>
      <div className={LoginPageStyle.loginPage}>
        <h1>Sign In</h1>
        <form onSubmit={handlerSubmit} className={LoginPageStyle.LoginForm}>
          <input type="text" placeholder="Email or Phone" name="EmailOrPhone" />
          <input type="password" placeholder="Password" name="Password" />
          <button className={LoginPageStyle.loginBtn}>Submit</button>
        </form>
        <div>
          <h4>
            Don't have an Account? <NavLink to="/register">Register</NavLink>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
