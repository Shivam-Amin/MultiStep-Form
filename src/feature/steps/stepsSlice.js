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
        changeCount: (state, actions) => {
            const {newCount} = actions.payload;
            state.count = newCount;
        }
    }
})

export const { nextStep, previousStep, changeCount } = stepsSlice.actions;

export default stepsSlice.reducer;