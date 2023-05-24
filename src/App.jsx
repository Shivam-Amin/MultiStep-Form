import { useState } from 'react';
import './App.css';
import InfoPage from './components/InfoPage';
import SelectPlan from './components/SelectPlan';
import Steps from './components/Steps';
import AddOns from './components/AddOns';
import {useSelector} from 'react-redux';

function App() {

  return (
    <div className="App">
      <div className="split">
        <div className="steps">
          <Steps />
        </div>
        <div>
          <InfoPage />
          <SelectPlan />
          <AddOns />
        </div>
      </div>
    </div>
  );
}

export default App;
