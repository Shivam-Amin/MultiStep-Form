import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, nextStep, previousStep } from '../feature/steps/stepsSlice';
import './../CSS/summary.css';

const Summary = () => {

  let displayPage = 'block';    // For inline style to form.
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
          <div>
          <p className='title'> {purchased_planTitle} (Monthly) </p>
          <a href="#" onClick={() => dispatch(changeCount({newCount:1}))}>Change</a>
          </div>
          <p className="price"> ${purchased_planPrice}/mo </p>
        </div>
      )
    } else {
      return (
        <div className="plan">
          <div>
            <p className='title'> {purchased_planTitle} (Yearly) </p>
            <a href="#" onClick={() => dispatch(changeCount({newCount:1}))}>Change</a>
          </div>
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
    <div className="page4">
      <div className="padding-top summary">
        <form 
          style={{display:displayPage}}  
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(nextStep())
        }}>
        <h1>Finishing up</h1>
        <p className='description'>Double-check everthing looks OK before confirming.</p> 

        <div className="plan-detail">
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
                    <p className="price"> +${price}/mo </p>
                  </div>
                )
              } else {
                return (
                  <div className="adds" key={title}>
                    <p className='title'> {title} </p>
                    <p className="price"> +${price}/yr </p>
                  </div>
                )
              }
            }) }
          </div>

        </div>
        
        <div className="total">
          {showTotal()}
        </div>
          
        <div className="buttons">
          <button 
          type="previous"
          onClick={() => dispatch(previousStep()) }>
              Go Back
          </button>
          <button 
            type="submit"
            onClick={() => dispatch(nextStep())}>
              Confirm
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Summary;