import { useState } from "react";

function Bonus() {

    const [bonus, setBonus] = useState({
        points: 0
    })

    // increment bonus points by 1 
    const incrementBonus = () =>{
        setBonus(state => ({
            points:  state.points + 1
        }))
    }

    return (
      <div className="container">
          <h4>Bonus Component</h4>
          <h3>Total point : {bonus.points} </h3>
          <button onClick={incrementBonus}> Increment + </button>
      </div>
    )
  }
  
  export default Bonus;