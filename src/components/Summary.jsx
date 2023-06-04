import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from '../feature/steps/stepsSlice';
import './../CSS/summary.css';

const Summary = () => {

  const { 
    purchased_planTitle, 
    purchased_planPrice,
    picked_Adds,
    period } = useSelector((state) => state.plans);

  let totalPrice = purchased_planPrice;


  const dispatch = useDispatch();

  function showPlan() {
    console.log('sldfjsd');
    if (period === 'monthly') {
      return (
        <div className="plan">
          <p className='title'> {purchased_planTitle} (Monthly) </p>
          <p className="price"> ${purchased_planPrice}/mo </p>
        </div>
      )
    } else {
      return (
        <div className="plan">
          <p className='title'> {purchased_planTitle} (Yearly) </p>
          <p className="price"> ${purchased_planPrice}/yr </p>
        </div>
      )
    }
  }

  function showTotal() {
    if (period === 'monthly') {
      return (
        <>
          <p className='title'> Total (per month) </p>
          <p className="price"> 
            <span> ${totalPrice}/mo </span>
          </p>
        </>
      )
    } else {
      return (
        <>
          <p className='title'> Total (per year) </p>
          <p className="price"> 
            <span> ${totalPrice}/yr </span>
          </p>
        </>
      )
    }
  }

  return (
    <div className="page4 split">
      <div className="padding-top">
        <form onSubmit={(e) => {
              e.preventDefault()
              dispatch(nextStep())
        }}>
        <h1>Finishing up</h1>
        <p className='description'>Double-check everthing looks OK before confirming.</p> 

        <div className="summary">
          {showPlan()}
          
          <hr />

          <div className="addOns">
            {picked_Adds.map((obj) => {
              const {title, price} = obj;
              totalPrice += price;
              if (period === 'monthly') {
                return (
                  <div className="adds" key={title}>
                    <p className='title'> {title} </p>
                    <p className="price"> + ${price}/mo </p>
                  </div>
                )
              } else {
                return (
                  <div className="adds" key={title}>
                    <p className='title'> {title} </p>
                    <p className="price"> + ${price}/yr </p>
                  </div>
                )
              }
            }) }
          </div>

        </div>
        
        <div className="total">
          {showTotal()}
        </div>
          
        <button 
          type="previous"
          onClick={() => dispatch(previousStep()) }>
            Go Back
        </button>
        <button 
          type="submit">
            Confirm
        </button>
        </form>
      </div>
    </div>
  )
}

export default Summary