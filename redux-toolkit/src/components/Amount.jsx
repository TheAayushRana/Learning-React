import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementByValue, increment, incrementByValue, reset } from "../slices/accountSlice";

export default function Amount() {

  const dispatch = useDispatch();
  const { amount } = useSelector(state => state.account);
  const { points } = useSelector(state => state.bonus);
  const [value, setValue] = useState(0)

  return (
    <div className='container'>
      <h4>Account Component</h4>
      <h3> Account : {amount} </h3>
      <h3>Total points : {points} </h3> 
      <button onClick={()=> dispatch(increment())}> Increment + </button>
      <button onClick={()=> dispatch(decrement())}> Decrement - </button>
      <input type='number' onChange={(e)=> setValue(Number(e.target.value))} />
      <button onClick={()=> dispatch(incrementByValue(value))}> Increment By {value} + </button>
      <button onClick={()=> dispatch(decrementByValue(value))}> Decrement By {value} - </button>
      <button onClick={()=> dispatch(reset())}> Intiate Account </button>
    </div>  
  )
}
