import './App.css';
import InfoPage from './components/InfoPage';
import SelectPlan from './components/SelectPlan';
import Steps from './components/Steps';
import AddOns from './components/AddOns';
import {useSelector} from 'react-redux';
import Summary from './components/Summary';

function DisplayPage() {
  const {count} = useSelector((state) => state.steps);

  switch (count+1) {
    case 1:
      return <InfoPage />
    case 2:
      return <SelectPlan />
    case 3:
      return <AddOns />
    case 4:
      return <Summary />
    default:
      return;
  }
}

function App() {

  return (
    <div className="App">
      <div className="split">
        <div className="steps">
          <Steps />
        </div>
        <div>
          { DisplayPage() }
        </div>
      </div>
    </div>
  );
}

export default App;
