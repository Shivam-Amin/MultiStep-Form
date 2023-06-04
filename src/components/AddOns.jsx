import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from '../feature/steps/stepsSlice';
import './../CSS/addOns.css';
import { addClassToPicks, removeClassToPicks } from '../feature/plans/plansSlice';


const AddOns = () => {

  const {period, picks, picks_bg} = useSelector((state) => state.plans)
  const dispatch = useDispatch();

  function changeAddValues(price) {
    if (period === 'monthly') {
      return (
        <span>+${price}/mo</span>
      )
    } else {
      return (
        <span>+${price}/yr</span>
      )
    }
  }

  function handleCheck(e, index, title) {
    if (e.target.checked) {
      dispatch(addClassToPicks({index: index}))
    } else {
      dispatch(removeClassToPicks({index: index, title: title}))
    }
  }


  return (
    <div className='page3 split'>
      <div className="padding-top add-ons">
        <form onSubmit={(e) => {
              e.preventDefault()
              dispatch(nextStep())
        }}>
        <h1>Pick add-ons</h1>
        <p className="description">Add-ons help enhance your gaming experience.</p>

        <div className="pick-options">
        { picks.map( (obj, index) => {
          const {title, describe, price} = obj;
          return (
            <div 
            className= {`pick ${picks_bg[index]}`} 
            key={title} >

              <input 
              type='checkbox' 
              id={title} 
              onChange={(e) => handleCheck(e, index, title)}
              defaultChecked={(picks_bg[index] === 'addBg')} >
              </input>
              <div className='pick-title'>
                <label htmlFor={title}>
                  <h1>{title}</h1>
                  <p className="description">{describe}</p>
                </label>
              </div>
              <p>
               {changeAddValues(price)}
              </p>
            </div>
          );
        }) }
        </div>
        <button 
          type="previous"
          onClick={ () => dispatch(previousStep()) }>
            Go Back
        </button>
        <button 
          type="submit"
          onClick={ () => dispatch(nextStep()) }>
            Next Step
        </button>
        </form>
      </div>
    </div>
  )
}

export default AddOns;