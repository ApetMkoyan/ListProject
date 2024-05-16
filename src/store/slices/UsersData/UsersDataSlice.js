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
      state.currentUser = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addCase(addNewUser.fulfilled, (state, { payload }) => {
        state.users.push(payload);
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(fetchLoginOut.fulfilled, (state) => {
        state.currentUser = {};
      })
      .addCase(addNewPost.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      });
  },
});

// Selector to get user data from the state
export const selectUsersData = (state) => state.userData;

// Exporting the login action for dispatch
export const { login } = userSliceData.actions;

// Exporting the reducer for use in the store
export const userDataReducer = userSliceData.reducer;
