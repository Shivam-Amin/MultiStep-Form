import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page1: 'display',
    page2: '',
    page3: '',
    page4: '',
    count: 0,      // used to add the bg color on the side step numbers.
}

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        nextPage: (state) => {
            if (state.page1 == 'display') {
                state.page1 = '';
                state.page2 = 'display';
            } else if (state.page2 == 'display') {
                state.page2 = '';
                state.page3 = 'display';
            } else if (state.page3 == 'display') {
                state.page3 = '';
                state.page4 = 'display';
            }
            state.count++;
        },
        previousPage: (state) => {
            if (state.page2 == 'display') {
                state.page2 = '';
                state.page1 = 'display';
            } else if (state.page3 == 'display') {
                state.page3 = '';
                state.page2 = 'display';
            }
            state.count--;
        },
    }
})

export const { nextPage, previousPage } = displaySlice.actions;

export default displaySlice.reducer;
