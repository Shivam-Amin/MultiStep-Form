import img1 from "./../images/icon-arcade.png";
import img2 from "./../images/icon-advanced.png";
import img3 from "./../images/icon-pro.png";
import {useDispatch, useSelector} from 'react-redux';
import { nextPage, previousPage } from "../feature/display/displaySlice";
import { changePeriod } from "../feature/plans/plansSlice";


const SelectPlan = () => {

  const {page2} = useSelector((store) => store.display);
  const {arcade, advanced, pro, period} = useSelector((store) => store.plans);
  const dispatch = useDispatch();
  
  // const [arcade, setArcade] = useState(9);
  // const [advanced, setAdvanced] = useState(12);
  // const [pro, setPro] = useState(15);
  // const [period, setPeriod] = useState('monthly');

  const addClass = (e) => {
    console.log(e);
  }

  // const changePeriod = () => {
  //   if (period == 'monthly') {
  //     setPeriod('yearly')
  //     setArcade(90);
  //     setAdvanced(120);
  //     setPro(150);
  //   } else {
  //     setPeriod('monthly')
  //     setArcade(9);
  //     setAdvanced(12);
  //     setPro(15);
  //   }
  //   console.log(period);
  // }
// plans
  const allPlans = {
    plan1: {
      img: img1,
      title: "Arcade",
      price: arcade
    },
    plan2: {
      img: img2,
      title: "Advanced",
      price: advanced
    },
    plan3: {
      img: img3,
      title: "Pro",
      price: pro
    },
  }
  const arrayOfPlans = Object.values(allPlans);

  return (
    <div className={`page2 split ${page2}`}>
      <div className="padding-top select-plan">
        <h1>Select your plan</h1>
        <p className="description">You have the option of monthly or yearly billing.</p>

        <div className = {`plans ${period} addBg`}>
          {arrayOfPlans.map(obj => {
            if (period == 'monthly') {
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

        <input type="checkbox" name="" id="plan-period" />
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
          onClick={() => dispatch(previousPage()) }>
            Go Back
        </button>
        <button 
          type="button"
          onClick={() => dispatch(nextPage()) }>
            Next Step
        </button>
      </div>
    </div>
  )
}




export default SelectPlan;