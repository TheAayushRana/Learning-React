import { useState } from 'react';
import './app.css'
import Amount from './components/Amount'
import Bonus from './components/Bonus'

function App() {
  const [account, setAccount] = useState({
    amount: 0,
  });

  const [bonus, setBonus] = useState({
    points: 0
  })


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
  const incrementByvalue = (value) =>{
    setAccount(prevState => ({
        amount: prevState.amount + value
    }))
  }


  // increment bonus points by 1 
  const incrementBonus = () =>{
    setBonus(state => ({
        points:  state.points + 1
    }))
}

  return (
    <div>
      <h4> App </h4>
      <h3> Current Amount : {account.amount}</h3>  
      <h3> Total Bonus Amount : {bonus.points} </h3>  

      <Amount account={account} increment={increment} decrement={decrement} incrementByvalue={incrementByvalue}/>
      <Bonus incrementBonus={incrementBonus} bonus={bonus}/>
    </div>
  )
}

export default App