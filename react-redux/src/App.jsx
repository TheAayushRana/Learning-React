import { useSelector } from 'react-redux';
import './app.css';
import Amount from './components/Amount';
import Bonus from './components/Bonus';

function App() {
  // state yaha par global state ha
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);

  return (
    <div>
      <h4> App </h4>
      {account.loading ? (
        <p> Loading..... </p>
      ) : account.error ? (
        <p> Error {account.error} </p>
      ) : (
        <h3> Current Amount : ${amount}</h3>
      )}
      <h3> Total Bonus Amount : {points} </h3>
      <Amount />
      <Bonus />
    </div>
  );
}

export default App;
