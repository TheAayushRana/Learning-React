import { useSelector } from 'react-redux';
import './app.css';
import Amount from './components/Amount';
import Bonus from './components/Bonus';

function App() {

  const { amount } = useSelector(state => state.account); 
  const { points } = useSelector(state => state.bonus); 

  return (
    <div>
      <h4> App </h4>
      <h3> Current Amount : {amount} </h3>
      <h3> Total Bonus Amount : {points} </h3>
      <Amount />
      <Bonus />
    </div>
  );
}

export default App;
