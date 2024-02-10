import { useDispatch, useSelector } from "react-redux"
import { increment } from "../slices/bonusSlice";
import { reset } from "../slices/bonusSlice";

export default function Bonus() {

  const dispatch = useDispatch();
  const { points } = useSelector(state => state.bonus);
  const { amount } = useSelector(state => state.account);

  return (
    <div className='container'>
      <h4>Bonus Component</h4>
      <h3>Total amount : {amount} </h3>
      <h3>Total points : {points} </h3>
      <button onClick={()=> dispatch(increment())}>
        Increment +
      </button>
      <button onClick={()=> dispatch(reset())}> Intiate Account </button>
    </div>  
  )
}
