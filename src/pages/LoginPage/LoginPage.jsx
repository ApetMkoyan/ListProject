import { NavLink, Navigate, useNavigate } from "react-router-dom";
import LoginPageStyle from "./LoginPage.module.css";
import { login, selectUsersData } from "../../store/slices/UsersData/UsersDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../store/slices/UsersData/API";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(selectUsersData);
  const hendlerSubmit = (e) => {
    e.preventDefault();
    const {
      EmailOrPhone: { value: EmailOrPhone },
      Password: { value: Password },
    } = e.target;

    const checkUser = { EmailOrPhone, Password };

    const check = () => {
      const user = users.find((el) => (el.phone === EmailOrPhone || el.email === EmailOrPhone) && el.password === Password) || null;
      if (user) {
        console.log(user);
        return user;
      } else {
        return null;
      }
    };

    if (check()) {
      dispatch(login(check()));
      dispatch(fetchLogin(check()));
      navigate("/userpage");
    } else {
      return alert("User Not Found");
    }
  };

  return (
    <div className={LoginPageStyle.mainLoginPage}>
      <div className={LoginPageStyle.loginPage}>
        <h1>Sign In</h1>
        <form onSubmit={hendlerSubmit} className={LoginPageStyle.LoginForm}>
          <input type="text" placeholder="Email or Phone" name="EmailOrPhone" />
          <input type="password" placeholder="Password" name="Password" />
          <button className={LoginPageStyle.loginBtn}>Submit</button>
        </form>
        <div>
          <h4>
            Don't have Account? <NavLink to="/register">Register</NavLink>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
