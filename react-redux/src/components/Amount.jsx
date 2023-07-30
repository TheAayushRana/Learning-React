import { useState } from 'react';
import { dec, increment, incrementByAmount } from '../actions';

function Amount({ store }) {

  const [value, setValue] = useState(0);

// Just redux don't work in react as when we dispatch an action a new state is returned by the reducer
// which is updated in redux store. In react renders a page when its state is updated not on redux state
// so because of this problem we use react-redux which maps redux state to react state also it gives
// easy access to store + hooks like useSelector to get any state, useDispatch to dispatch action easily

  return (
    <div className='container'>
      <h4>Account Component</h4>
      <h3> Account : ${store.getState().account.amount} </h3>
      <button onClick={()=> store.dispatch(increment())}> Increment + </button>
      <button onClick={()=> store.dispatch({ type: dec })}> Decrement - </button>
      <input type='number' onChange={(e)=> setValue(Number(e.target.value))} />
      <button onClick={()=> store.dispatch(incrementByAmount(value))}> Increment By {value} + </button>
    </div>
  );
}

export default Amount;
