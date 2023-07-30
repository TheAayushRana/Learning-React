import { incrementBonus } from '../actions';

function Bonus({ store }) {
  return (
    <div className='container'>
      <h4>Bonus Component</h4>
      <h3>Total point : {store.getState().bonus.points} </h3>
      <button onClick={() => store.dispatch(incrementBonus())}>
        Increment +
      </button>
    </div>
  );
}

export default Bonus;