import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    period: 'monthly',
    arcade: 9,
    advanced: 12,
    pro: 15,
};

const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
        changePeriod: (state) => {
            if (state.period == 'monthly')  {
                state.period = 'yearly';
                state.arcade = 90;
                state.advanced = 120;
                state.pro = 150
            } else {
                state.period = 'monthly';
                state.arcade = 9;
                state.advanced = 12;
                state.pro = 15
            }
        }
    }
});
console.log(plansSlice.reducer);

export const  {changePeriod} = plansSlice.actions;

export default plansSlice.reducer;