import { useState } from 'react';
import { dec, decrementByAmount, getUser, increment, incrementByAmount } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

function Amount() {

  const [value, setValue] = useState(0);

  const amount = useSelector(state=> state.account.amount);
  const points = useSelector(state=> state.bonus.points);

  const dispatch = useDispatch(); // store se dispatch le aata ha useDispatch()

  return (
    <div className='container'>
      <h4>Account Component</h4>
      <h3> Account : ${amount} </h3>
      <h3>Total points : {points} </h3> 
      <button onClick={()=> dispatch(increment())}> Increment + </button>
      <button onClick={()=> dispatch({ type: dec })}> Decrement - </button>
      <input type='number' onChange={(e)=> setValue(Number(e.target.value))} />
      <button onClick={()=> dispatch(incrementByAmount(value))}> Increment By {value} + </button>
      <button onClick={()=> dispatch(decrementByAmount(value))}> Decrement By {value} - </button>
      <button onClick={()=> dispatch(getUser(1))}> Intiate Account </button>
    </div>
  );
}

export default Amount;

// Just redux don't work in react as when we dispatch an action a new state is returned by the reducer
// which is updated in redux store. In react renders a page when its state is updated not on redux state
// so because of this problem we use react-redux which merge redux state to react state also it gives
// easy access to store + hooks like useSelector to get any state, useDispatch to dispatch action easily