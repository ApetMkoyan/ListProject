import { createAsyncThunk } from "@reduxjs/toolkit";
import UseSendRequest from "../../../hook/UseSendRequest";
import { HOUSE_DATA_URL } from "../../../API/URL";

const {get} = UseSendRequest()
export const getAppartmentsData = createAsyncThunk("appartmentsData/getAppartmentsData",async ()=>{
    const result = await get(HOUSE_DATA_URL);
    return result
});

export const getCurrentAppartment = createAsyncThunk("appartmentsData/getCurrentAppartment",async(id)=>{
    const result = await get(HOUSE_DATA_URL + `/${id}`);
    return result
});
