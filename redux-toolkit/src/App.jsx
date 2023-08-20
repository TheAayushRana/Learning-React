import './app.css';
import Amount from './components/Amount';
import Bonus from './components/Bonus';

function App() {

  return (
    <div>
      <h4> App </h4>
      <h3> Current Amount : </h3>
      <h3> Total Bonus Amount : </h3>
      <Amount />
      <Bonus />
    </div>
  );
}

export default App;
