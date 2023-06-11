import {useDispatch, useSelector} from 'react-redux';
import { addClassToPlans, changePeriod } from "../feature/plans/plansSlice";
import './../CSS/selectPlan.css'
import { nextStep, previousStep } from "../feature/steps/stepsSlice";

const SelectPlan = () => {

  const { period, allPlans } = useSelector((store) => store.plans);
  const {plan_bg} = useSelector((store) => store.plans);
  const dispatch = useDispatch();

  return (
    <div className='page2'>
      <div className="padding-top select-plan">
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(nextStep())
        }}>
        <h1>Select your plan</h1>
        <p className="description">You have the option of monthly or yearly billing.</p>
        <div className = 'plans'>
          {allPlans.map((obj, index) => {
            const {img, title, price} = obj;
            if (period === 'monthly') {
              return (
                <>
                <input type='radio'
                name='plan'
                id={title}
                className={plan_bg[index]} 
                key={title} 
                required
                onChange={() => dispatch(addClassToPlans({plan_num: index, value: title, price: price}))} 
                defaultChecked={(plan_bg[index] === 'addBg')} />
                <label htmlFor={title} className={plan_bg[index]}>
                  <img src={img} alt="icon" />
                  <div>
                    <h1>{title}</h1>
                    <p className="description">${price}/mo</p>
                  </div>
                </label>
                </>  
              );
            } else {  
              return(
                <>
                <input type='radio'
                name='plan'
                id={title}
                className={plan_bg[index]} 
                key={title} 
                required
                onChange={() => dispatch(addClassToPlans({plan_num: index, value: title, price: price}))} 
                defaultChecked={(plan_bg[index] === 'addBg')} />
                <label htmlFor={title} className={plan_bg[index]}>
                  <img src={img} alt="icon" />
                  <div>
                    <h1>{title}</h1>
                    <p className="description">${price}/yr</p>
                    <p className="show-free">2 months free</p>
                  </div>
                </label>
                </> 
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

        <div className='buttons'>
        <button 
          type="previous"
          onClick={() => dispatch(previousStep()) }>
            Go Back
        </button>
        <button type="submit">
            Next Step
        </button>
        </div>
        </form>
      </div>
    </div>
  )
}




export default SelectPlan;