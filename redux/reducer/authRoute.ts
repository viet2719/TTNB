import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';


 interface setInfoUserSlider {
    id: string;
    position: string;
    name: string;

  }
  
  const initialState: setInfoUserSlider = {
    id: "1664",
    position:"employees",
    name:"Ngô Mạnh Trường",
  }

  

export const setInfoUserSlider = createSlice({
    name: "infoUser",
    initialState ,
    reducers: {
        setInfo: (state, action) => {
            state.id = action.payload;
        },
    },
});


export const { setInfo} = setInfoUserSlider.actions
