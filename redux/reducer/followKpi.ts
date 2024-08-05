import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const followKpiSlider = createSlice({
  name: "followKpi",
  initialState: {
    showButton: false  ,
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
//   extraReducers: (builder) => {
//     builder.addCase(initData.fulfilled, (state, action) => {
//         state.data = action.payload;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.data = action.payload;
//       });
//   },
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
} = followKpiSlider.actions;
