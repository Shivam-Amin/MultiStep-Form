import { createSlice } from "@reduxjs/toolkit";
import img1 from "./../../images/icon-arcade.png";
import img2 from "./../../images/icon-advanced.png";
import img3 from "./../../images/icon-pro.png";

const arcade = 9;
const advanced = 12;
const pro = 15;
const pick1_price = 1;
const pick2_price = 2;
const pick3_price = 2;

const initialState = {
  period: 'monthly',

  // Plans
  arcade: arcade,
  advanced: advanced,
  pro: pro,
  allPlans: [
    { img: img1, title: "Arcade", price: arcade },
    { img: img2, title: "Advanced", price: advanced },
    { img: img3, title: "Pro", price: pro },
  ],

  // For the future use in step 4.
  plan_bg: ['', '', ''],
  purchased_planTitle: '',
  purchased_planPrice: 0,

  // Addons
  pick1_price: pick1_price,
  pick2_price: pick2_price,
  pick3_price: pick3_price,
  picks: [
    { title: "Online serivce", describe: "Access to multiplayer games", price: pick1_price },
    { title: "Larger storage", describe: "Extra 1TB of cloud save", price: pick2_price },
    { title: "Customizable profile", describe: "Custom theme on your profile", price: pick3_price },
  ],

  // For the future use in step 4.
  picked_Adds: [],      // We will add Bg class & also count price & title 
  picks_bg: ['', '', ''],    // To add bg color when it's checked.
  
};

const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
      changePeriod: (state) => {
        // Chaging prices according to peroid 
        if (state.period === 'monthly')  {
            state.period = 'yearly';
            state.arcade = 90;
            state.advanced = 120;
            state.pro = 150;
            state.pick1_price = 10;
            state.pick2_price = 20;
            state.pick3_price = 20;
        } else {
            state.period = 'monthly';
            state.arcade = 9;
            state.advanced = 12;
            state.pro = 15;
            state.pick1_price = 1;
            state.pick2_price = 2;
            state.pick3_price = 2;
        }
        // Setting plan prices according to peroid
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
        // Setting pick prices according to peroid
        state.picks.forEach((pick, index) => {
          switch (index) {
            case 0:
              pick.price = state.pick1_price;
              break;
            case 1: 
              pick.price = state.pick2_price;
              break;
            case 2:
              pick.price = state.pick3_price;
              break;
            default:
              break;
          }
        })
      },

      // To save which plan is purchased & adding bg color to that plan button.
      addClassToPlans: (state, action) => {
        const {plan_num, value, price} = action.payload;
        const newArray = ['', '', ''];
        newArray[plan_num] = 'addBg';
        state.plan_bg = newArray;
        state.purchased_planTitle = value;
        state.purchased_planPrice = price;
      },

      addClassToPicks: (state, action) => {
        const {index} = action.payload;
        state.picks_bg[index] = 'addBg';

        state.picked_Adds.push(
          {
            title: state.picks[index].title,
            price: state.picks[index].price
          }
        )
      },

      removeClassToPicks: (state, action) => {
        const {index, title} = action.payload;
        state.picks_bg[index] = '';

        for (let i = 0; i < state.picked_Adds.length; i++) {
          const element = state.picked_Adds[i].title;
          if (element === title) {
            state.picked_Adds.splice(i, 1);   // Remove i th element(here, obj) from the array.
          }
        }
      }
    }
});

export const  { changePeriod, addClassToPlans, addClassToPicks, removeClassToPicks } = plansSlice.actions;

export default plansSlice.reducer;