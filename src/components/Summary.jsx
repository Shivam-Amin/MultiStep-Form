import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../feature/steps/stepsSlice';
import './../CSS/summary.css';

const Summary = () => {

  const dispatch = useDispatch();

  return (
    <div className="page4 split">
      <div className="padding-top">
        <h1>Finishing up</h1>
        <p className='description'>Double-check everthing looks OK before confirming.</p> 
        <button 
          type="previous"
          onClick={() => dispatch(previousStep()) }>
            Go Back
        </button>
        <button 
          type="button"
          onClick={() => dispatch(nextStep()) }>
            Next Step
        </button>
      </div>
    </div>
  )
}

export default Summary