import { createSlice } from "@reduxjs/toolkit";
import { getAppartmentsData, getCurrentAppartment } from "./API";

export const appartamentsDataSlice = createSlice({
  name: "appartmentsData",
  initialState: {
    allAppartments: [],
    currentAppartment: {},
    isLoading: false,
    price: {
      min: 0,
      max: 1000000000000,
    },
  },
  reducers: {
    getPriceRange(state, { payload }) {
      return {
        ...state,
        price: {
          min: payload.min,
          max: payload.max,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAppartmentsData.fulfilled, (state, { payload }) => {
        return {
          ...state,
          allAppartments: payload,
        };
      })
      .addCase(getCurrentAppartment.fulfilled, (state, { payload }) => {
        return {
          ...state,
          currentAppartment: payload,
        };
      });
  },
});

export const selectAppartmentsData = (state) => state.appartmentsData;

export const { getPriceRange } = appartamentsDataSlice.actions;

export const appartamentReducer = appartamentsDataSlice.reducer;
