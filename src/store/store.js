import { configureStore } from "@reduxjs/toolkit";
import { appartamentReducer } from "./slices/appartamentsSlice/appartmentsSlice";
import { carsDataReducer } from "./slices/CarsDataSlice/carsSlice";
import { JobsDataReducer } from "./slices/JobsSlice/JobsSlice";
import { userDataReducer } from "./slices/UsersData/UsersDataSlice";

export const store = configureStore({
  reducer: {
    appartmentsData: appartamentReducer,
    carsData: carsDataReducer,
    jobsData: JobsDataReducer,
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});


