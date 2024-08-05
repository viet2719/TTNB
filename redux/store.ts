import { configureStore } from "@reduxjs/toolkit";
import { setInfoUserSlider } from "./reducer/authRoute";
import { homePageSlider } from "./reducer/homePage";
import { deleteDataSlider } from "./reducer/deleteData";
import { followKpiSlider } from "./reducer/followKpi";
const store = configureStore({
    reducer: {
        infoUser: setInfoUserSlider.reducer,
        homePage: homePageSlider.reducer,
        deleteData: deleteDataSlider.reducer,
        followKpi: followKpiSlider.reducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
