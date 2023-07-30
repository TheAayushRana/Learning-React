import { useState } from 'react';

function Amount() {
  const [account, setAccount] = useState({
    amount: 0,
  });

  const [value, setValue] = useState(0);

  // increment account amount by 1 
  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  // decrement account amount by 1 
  const decrement = () => {
    setAccount((prevState) => ({
      amount: prevState.amount - 1,
    }));
  };

  // increment account amount by value
  const incrementByvalue = () =>{
    setAccount(prevState => ({
        amount: prevState.amount + value
    }))
  }

  return (
    <div className='container'>
      <h4>Account Component</h4>
      <h3> Account : ${account.amount} </h3>
      <button onClick={increment}> Increment + </button>
      <button onClick={decrement}> Decrement - </button>
      <input type='number' onChange={(e)=> setValue(Number(e.target.value))} />
      <button onClick={incrementByvalue}> Increment By {value} + </button>
    </div>
  );
}

export default Amount;
