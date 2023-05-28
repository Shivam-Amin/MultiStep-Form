import {useDispatch, useSelector} from 'react-redux';
import { changePeriod } from "../feature/plans/plansSlice";
import './../CSS/selectPlan.css'
import { nextStep, previousStep } from "../feature/steps/stepsSlice";


const SelectPlan = () => {

  // const {page2} = useSelector((store) => store.display);
  const { period, allPlans } = useSelector((store) => store.plans);
  const dispatch = useDispatch();

  const addClass = (e) => {
    console.log(e);
  }

  return (
    <div className='page2 split'>
      <div className="padding-top select-plan">
        <h1>Select your plan</h1>
        <p className="description">You have the option of monthly or yearly billing.</p>

        <div className = {`plans ${period} addBg`}>
          {allPlans.map(obj => {
            if (period === 'monthly') {
              return(
              <button type="radio" id="same" key={obj.title} onClick={addClass}>
                <img src={obj.img} alt="icon" />
                <div>
                  <h1>{obj.title}</h1>
                  <p className="description">${obj.price}/mo</p>
                </div>
              </button>
              );
            } else {
              return(
                <button className="addBg" type="radio" id="same" key={obj.title}>
                  <img src={obj.img} alt="icon" />
                  <div>
                    <h1>{obj.title}</h1>
                    <p className="description">${obj.price}/yr</p>
                    <p className="show-free">2 months free</p>
                  </div>
                </button>
              );
            }
        })}
        </div>
        
        <input 
          type="checkbox" 
          name="" 
          id="plan-period" 
          defaultChecked={(period === 'yearly')} />
        <label 
          htmlFor="plan-period" 
          onClick={() => {
            dispatch(changePeriod());
          }}>
          <div className={period} id="month">Monthly</div>
          <div className={period} id="year">Yearly</div>
        </label>

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




export default SelectPlan;