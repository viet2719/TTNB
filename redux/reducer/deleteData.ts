import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const deleteDataSlider = createSlice({
  name: "deleteData",
  initialState: {
    showButton: true  ,
    valueSend: {

    }
    
  },
  reducers: {
    setStatusButton: (state, action) => {
      state.showButton = action.payload;
    },
    sendValue: (state, action) => {
      state.valueSend = action.payload;
    },
  
  },
  extraReducers: (builder) => {
    // builder.addCase(initData.fulfilled, (state, action) => {
    //     state.data = action.payload;
    //   })
    //   .addCase(fetchData.fulfilled, (state, action) => {
    //     state.data = action.payload;
    //   });
  },
});

// export const initData = createAsyncThunk("", async () => {
//   const res = await axios.get(`http://localhost:8000/api/kpi/`);
//   return res.data;
// });

// export const fetchData = createAsyncThunk("", async (action) => {
//   const data = await axios.post(`http://localhost:8000/api/kpi/search`, {
//     status: action,
//   });
//   return data.data;
// });

export const {
  sendValue,setStatusButton
} = deleteDataSlider.actions;
