import { createSlice } from "@reduxjs/toolkit";
import { getCarsData, getCurrentCar } from "./API";

export const carsDataSlice = createSlice({
  name: "carsData",
  initialState: {
    allCars: [],
    isLoading:false,
    currentCar:{}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getCarsData.fulfilled, (state, { payload }) => {

      return {
        ...state,
        allCars: payload,
      };
    })
    .addCase(getCurrentCar.fulfilled, (state, {payload}) =>{

      return{
        ...state,
        currentCar:payload
      }
    })
  },
});

export const selectCarsData = (state) => state.carsData;

export const carsDataReducer = carsDataSlice.reducer;
