import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import MainPage from "../components/MainPage/MainPage";
import Jobs from "../pages/Jobs/Jobs";
import PostApartment from "../pages/PostApartment/PostApartment"
import CurrentApartment from "../pages/CurrentApartment/CurrentApartment";
import CurrentCar from "../pages/CurrentCar/CurrentCar";
import JobsPage from "../pages/JobsPage/JobsPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ApartmentsPage from "../pages/ApartmentsPage/ApartmentsPage";
import UserPage from "../pages/UserPage/UserPage";
import { useSelector } from "react-redux";
import { selectUsersData } from "../store/slices/UsersData/UsersDataSlice";
import PostCar from "../pages/PostCar/PostCar";
import CarsPage from "../pages/CarsPage/CarsPage";
import PostJob from "../pages/PostJob/PostJob";

const AppRouter = () => {
  const { currentUser } = useSelector(selectUsersData);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="apartments" element={<ApartmentsPage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="house/:id/:title" element={<CurrentApartment />} />
          <Route path="cars/:id/:carBrand" element={<CurrentCar />} />
          <Route path="jobs/:id/:jobTitle" element={<JobsPage />} />
          {currentUser?.id ? <Route path="userpage" element={<UserPage />} /> : <Route path="userpage" element={<Navigate to="/login" />} />}
          <Route path="postApartment" element={<PostApartment />} />
          <Route path="postCar" element={<PostCar />} />
          <Route path="postJob" element={<PostJob />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
