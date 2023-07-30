import './app.css'
import Amount from './components/Amount'
import Bonus from './components/Bonus'

function App({ store }) {

  return (
    <div>
      <h4> App </h4>
      <h3> Current Amount : {store.getState().account.amount}</h3>  
      <h3> Total Bonus Amount :  {store.getState().bonus.points} </h3>  

      <Amount store={store} />
      <Bonus store={store} />
    </div>
  )
}

export default App