import React from 'react'
import {useSelector} from 'react-redux';


const Steps = () => {
  const {steps, count} = useSelector((state) => state.steps);
  let numColor = '';

  return (
    
    <div className='default-steps'>
      <ul role='list'>
        {steps.map((value, index) => {
          ((index === count) || (index === 3 && count === 4)) ? numColor='showBG': numColor='';
          return (
            <div className={`all-steps ${numColor}`} key={index}>
              <div className="each-step">
                <li key={index}>
                  <h2>step {index+1} </h2>
                  <p>{value}</p>
                </li>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Steps