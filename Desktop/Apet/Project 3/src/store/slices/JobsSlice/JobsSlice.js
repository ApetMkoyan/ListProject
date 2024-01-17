import { createSlice } from "@reduxjs/toolkit";
import { getCurrentJobs, getJobsData } from "./API";

const jobsDataSlice = createSlice({
  name: "jobsData",
  initialState:{
    isLoading: false,
    JobsData:[],
    currentJobs:[]
  },
  reducers:[],
  extraReducers:(builder) => {
    builder
    .addCase(getJobsData.fulfilled, (state, {payload})=>{
        return {
          ...state,
          JobsData:payload
        };
    })
    .addCase(getCurrentJobs.fulfilled,(state,{payload})=>{
      return{
        ...state,
        currentJobs:payload
      }
    })
  }
});

export const selectJobsData = (state) => state.jobsData;

export const JobsDataReducer = jobsDataSlice.reducer