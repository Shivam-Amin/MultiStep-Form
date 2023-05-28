import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    steps: ['your info', 'select plan', 'add-ons', 'summary'],
    count: 0,
}

const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.count++;
        },
        previousStep: (state) => {
            state.count--;
        },
    }
})

export const { nextStep, previousStep } = stepsSlice.actions;


export default stepsSlice.reducer;