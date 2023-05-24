import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./feature/display/displaySlice";
import stepsReducer from "./feature/display/stepsSlice";
import plansReducer from "./feature/plans/plansSlice";

export default configureStore({
    reducer: {
        display: displayReducer,
        steps: stepsReducer,
        plans: plansReducer,
    }
})