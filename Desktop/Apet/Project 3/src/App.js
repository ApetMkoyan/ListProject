import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppRouter from "./Routes/Routes";
import { selectUsersData } from "./store/slices/UsersData/UsersDataSlice";
import { useEffect } from "react";
import { getCurrentUser, getUsersData } from "./store/slices/UsersData/API";

function App() {
  const dispatch = useDispatch()
  const {users} = useSelector(selectUsersData)
  
  useEffect(()=>{
    dispatch(getUsersData())
    dispatch(getCurrentUser())
  },[])

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
