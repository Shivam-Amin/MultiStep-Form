import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from '../feature/steps/stepsSlice';
import './../CSS/addOns.css';



const AddOns = () => {

  const {period, picks} = useSelector((state) => state.plans)
  const dispatch = useDispatch();

  // const [pick1, setPick1] = useState(1);
  // const [pick2, setPick2] = useState(2);
  // const [pick3, setPick3] = useState(2);

  // const Picks = [
  //   { title: "Online serivce", describe: "Access to multiplayer games", price: pick1 },
  //   { title: "Larger storage", describe: "Extra 1TB of cloud save", price: pick2 },
  //   { title: "Customizable profile", describe: "Custom theme on your profile", price: pick3 },
  // ]
  // const arrayOfPlans = Object.values(Picks);

  function changeAddValues(obj) {
    if (period === 'monthly') {
      return (
        <span>+${obj.price}/mo</span>
      )
    } else {
      return (
        <span>+${obj.price}/yr</span>
      )
    }
  }
console.log(picks);
  return (
    <div className='page3 split'>
      <div className="padding-top add-ons">
        <h1>Pick add-ons</h1>
        <p className="description">Add-ons help enhance your gaming experience.</p>

        <div className="pick-options">
        { picks.map( obj => {
            return (
              <div className='pick' key={obj.title}>
                <input type='checkbox' id={obj.title}></input>
                <div className='pick-title'>
                  <label htmlFor={obj.title}>
                    <h1>{obj.title}</h1>
                    <p className="description">{obj.describe}</p>
                  </label>
                </div>
                <p>
                 {changeAddValues(obj)}
                </p>
              </div>
            );
          }
        ) }
        </div>
        <button 
          type="previous"
          onClick={ () => dispatch(previousStep()) }>
            Go Back
        </button>
        <button 
          type="button"
          onClick={ () => dispatch(nextStep()) }>
            Next Step
        </button>
      </div>
    </div>
  )
}

const Tick = (props) => {
  const {color, stroke} = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 12 9">
      <path fill={color} stroke={stroke} stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/>
    </svg>
  );
}

export default AddOns