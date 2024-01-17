import { createAsyncThunk } from "@reduxjs/toolkit";
import UseSendRequest from "../../../hook/UseSendRequest";
import { CURRENT_USER_DATA_URL, HOUSE_DATA_URL, USERS_DATA_URL } from "../../../API/URL";
const { get, post, put } = UseSendRequest();

export const getUsersData = createAsyncThunk("userData/getUsersData", async () => {
  const result = await get(USERS_DATA_URL);

  return result;
});

export const addNewUser = createAsyncThunk("userData/addNewUser", async (data) => {
  const result = await post(USERS_DATA_URL, data);
  return result;
});

export const getCurrentUser = createAsyncThunk("currentUser/getCurrentUser", async () => {
  const result = await get(CURRENT_USER_DATA_URL);
  return result;
});

export const fetchLogin = createAsyncThunk("currentUser/fetchLogin", async (data) => {
  const result = await put(CURRENT_USER_DATA_URL, data);
  return result;
});

export const fetchLoginOut = createAsyncThunk("currentUser/fetchLoginOut", async (data) => {
  const result = await put(CURRENT_USER_DATA_URL, data);
  return result;
});

export const addNewPost = createAsyncThunk("currentUser/addNewPost", async (payload) => {
  const result = await put(CURRENT_USER_DATA_URL, payload.data);
  const result2 = await put(USERS_DATA_URL + `/${payload.id}`, payload.data);
  const result3 = await post(HOUSE_DATA_URL, { ...payload.data.posts[0] });

  return payload.data;
});
