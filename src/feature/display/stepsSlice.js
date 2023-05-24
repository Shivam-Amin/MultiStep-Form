import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    steps: ['your info', 'select plan', 'add-ons', 'summary'],
    count: 1,
}

const stepsSlice = createSlice({
    name: 'steps',
    initialState,
})

export default stepsSlice.reducer;