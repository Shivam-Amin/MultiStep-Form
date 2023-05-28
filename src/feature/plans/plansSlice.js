import { createSlice } from "@reduxjs/toolkit";
import img1 from "./../../images/icon-arcade.png";
import img2 from "./../../images/icon-advanced.png";
import img3 from "./../../images/icon-pro.png";

const arcade = 9;
const advanced = 12;
const pro = 15;
const pick1 = 1;
const pick2 = 2;
const pick3 = 2;

const initialState = {
  period: 'monthly',
  arcade: arcade,
  advanced: advanced,
  pro: pro,
  allPlans: [
    { img: img1, title: "Arcade", price: arcade },
    { img: img2, title: "Advanced", price: advanced },
    { img: img3, title: "Pro", price: pro },
  ],
  pick1: pick1,
  pick2: pick2,
  pick3: pick3,
  picks: [
    { title: "Online serivce", describe: "Access to multiplayer games", price: pick1 },
    { title: "Larger storage", describe: "Extra 1TB of cloud save", price: pick2 },
    { title: "Customizable profile", describe: "Custom theme on your profile", price: pick3 },
  ]
};

const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
      changePeriod: (state, action) => {
        console.log(action);
        if (state.period === 'monthly')  {
            state.period = 'yearly';
            state.arcade = 90;
            state.advanced = 120;
            state.pro = 150;
            state.pick1 = 10;
            state.pick2 = 20;
            state.pick3 = 20;
        } else {
            state.period = 'monthly';
            state.arcade = 9;
            state.advanced = 12;
            state.pro = 15;
            state.pick1 = 1;
            state.pick2 = 2;
            state.pick3 = 2;
        }
        state.allPlans.forEach((item) => {
          switch (item.title) {
            case 'Arcade':
              item.price = state.arcade;
              break;
            case 'Advanced':
              item.price = state.advanced;
              break;
            case 'Pro':
              item.price = state.pro;
              break;
            default:
              break;
          }
        });
        state.picks.forEach((pick, index) => {
          switch (index) {
            case 0:
              pick.price = state.pick1;
              break;
            case 1:
              pick.price = state.pick2;
              break;
            case 2:
              pick.price = state.pick3;
              break;
            default:
              break;
          }
        })
      }
    }
});

export const  {changePeriod} = plansSlice.actions;

export default plansSlice.reducer;