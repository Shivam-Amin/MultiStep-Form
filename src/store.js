import { configureStore } from "@reduxjs/toolkit";
import stepsReducer from "./feature/steps/stepsSlice";
import plansReducer from "./feature/plans/plansSlice";

export default configureStore({
    reducer: {
        steps: stepsReducer,
        plans: plansReducer,
    }
})