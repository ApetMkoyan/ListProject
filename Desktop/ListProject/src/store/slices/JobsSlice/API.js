import { createAsyncThunk } from "@reduxjs/toolkit";
import UseSendRequest from "../../../hook/UseSendRequest";
import { JOBS_DATA_URL } from "../../../API/URL";

const {get} = UseSendRequest()
export const getJobsData = createAsyncThunk("jobsData/getJobsData", async()=>{
    const result = await get(JOBS_DATA_URL)
    return result
});

export const getCurrentJobs = createAsyncThunk("currentJobs/getCurrentJobs",async(id)=>{
    const result = await get(JOBS_DATA_URL +`/${id}`)
    return result
})