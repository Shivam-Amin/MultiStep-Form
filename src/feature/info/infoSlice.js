import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fname: '',
    email: '',
    contect: '',
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setFname: (state, action) => {
            const {fname} = action.payload;
            state.fname = fname;
        },
        setEmail: (state, action) => {
            const {email} = action.payload;
            state.email = email;
        },
        setContect: (state, action) => {
            const {contect} = action.payload;
            state.contect = contect;
        }
    }
})


export const  { setFname, setEmail, setContect } = infoSlice.actions;

export default infoSlice.reducer;