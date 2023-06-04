import {useDispatch, useSelector} from 'react-redux';
import { nextStep } from '../feature/steps/stepsSlice';
import './../CSS/infoPage.css';
import { setContect, setEmail, setFname } from '../feature/info/infoSlice';

const InfoPage = () => {
  const {fname, email, contect} = useSelector((store) => store.info);
  const dispatch = useDispatch();

  return (
    <div className='page1 split'>
      <div className="padding-top infoPage-form">
        <h1>Personal info</h1>
        <p className="description">Please provide your name, email address, and phone number.</p>
        <form onSubmit={(e) => {
          e.preventDefault()
          dispatch(nextStep())
        }}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name" 
            value={fname} 
            onChange={(e) => dispatch(setFname({fname: e.target.value}))}
            placeholder="e.g. Stephen King" 
            required/>
          </div>

          <div className="email">
            <label htmlFor="email">Email Address</label>
            <input 
            type="text" 
            value={email} 
            onChange={(e) => dispatch(setEmail({email: e.target.value}))}
            id="email" 
            placeholder="e.g. stephenking@lorem.com" required/>
          </div>
          
          <div className="number">
            <label htmlFor="contect">Phone Number</label>
            <input 
            type="tel"
            pattern={`[0-9]{10}`} 
            inputMode='numeric'
            value={contect} 
            onChange={(e) => dispatch(setContect({contect: e.target.value}))}
            id="contect" 
            placeholder="e.g. +1 234 567 890" 
            required/>
          </div>
          <button 
          type="submit" >
            Next Step
          </button>
        </form>
      </div>
    </div>
  )
}

export default InfoPage;
