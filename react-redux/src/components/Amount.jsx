import { useState } from 'react';

function Amount({ account, increment, decrement, incrementByvalue}) {

  const [value, setValue] = useState(0);

  return (
    <div className='container'>
      <h4>Account Component</h4>
      <h3> Account : ${account.amount} </h3>
      <button onClick={increment}> Increment + </button>
      <button onClick={decrement}> Decrement - </button>
      <input type='number' onChange={(e)=> setValue(Number(e.target.value))} />
      <button onClick={()=> incrementByvalue(value)}> Increment By {value} + </button>
    </div>
  );
}

export default Amount;
