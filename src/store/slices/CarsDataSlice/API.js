import { createAsyncThunk } from "@reduxjs/toolkit";
import UseSendRequest from "../../../hook/UseSendRequest";
import { CARS_DATA_URL } from "../../../API/URL";

const { get } = UseSendRequest();
export const getCarsData = createAsyncThunk("carsData/getCarsData", async () => {
  const result = await get(CARS_DATA_URL);
  return result;
});

export const getCurrentCar = createAsyncThunk("carsData/getCurrentCar", async (id) => {
  const result = await get(CARS_DATA_URL + `/${id}`);
  return result;
});
