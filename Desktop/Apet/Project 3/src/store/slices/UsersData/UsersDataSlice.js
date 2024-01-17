import { createSlice } from "@reduxjs/toolkit";
import { addNewPost, addNewUser, fetchLoginOut, getCurrentUser, getUsersData } from "./API";

export const userSliceData = createSlice({
  name: "userData",
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    login(state, { payload }) {
      return {
        ...state,
        currentUser: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.fulfilled, (state, { payload }) => {
        return {
          ...state,
          users: payload,
        };
      })
      .addCase(addNewUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          users: [...state.users, payload],
        };
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          currentUser: payload,
        };
      })
      .addCase(fetchLoginOut.fulfilled, (state) => {
        return {
          ...state,
          currentUser: {},
        };
      })
      .addCase(addNewPost.fulfilled, (state, { payload }) => {
        return {
          ...state,
          currentUser: payload,
        };
      });
  },
});

export const selectUsersData = (state) => state.userData;

export const { login } = userSliceData.actions;

export const userDataReducer = userSliceData.reducer;
