import { useDispatch, useSelector } from 'react-redux';
import { incrementBonus } from '../actions';

function Bonus() {

  const amount = useSelector(state=> state.account.amount);
  const points = useSelector(state=> state.bonus.points);

  const dispatch = useDispatch(); // store se dispatch le aata ha useDispatch()

  return (
    <div className='container'>
      <h4>Bonus Component</h4>
      <h3>Total amount : {amount} </h3>
      <h3>Total points : {points} </h3>
      <button onClick={() => dispatch(incrementBonus())}>
        Increment +
      </button>
    </div>
  );
}

export default Bonus;