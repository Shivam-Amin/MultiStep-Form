import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const pick1 = 1;
const pick2 = 2;
const pick3 = 2;
const {period} = useSelector((state) => state.plans)


const initialState = {
    pick1: pick1,
    pick2: pick2,
    pick3: pick3,
    Picks: [
        { title: "Online serivce", describe: "Access to multiplayer games", price: pick1 },
        { title: "Larger storage", describe: "Extra 1TB of cloud save", price: pick2 },
        { title: "Customizable profile", describe: "Custom theme on your profile", price: pick3 },
    ]
}

const addOnsSlice = createSlice({
    name: 'adds',
    initialState,
    reducers: {
        
    }
})