import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const homePageSlider = createSlice({
  name: "homePage",
  initialState: {
    month: "",
    year: "",
    typeKpiHandle: "sum",
    searchValue: "",
    group: "",
    data: [],
  },
  reducers: {
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setTypeKpi: (state, action) => {
      state.typeKpiHandle = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setGroupValue: (state, action) => {
      state.group = action.payload;
    },
    setDataRedux: (state, action) => {
      state.data = action.payload;
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
  setMonth,
  setYear,
  setTypeKpi,
  setSearchValue,
  setGroupValue,
  setDataRedux,
} = homePageSlider.actions;
