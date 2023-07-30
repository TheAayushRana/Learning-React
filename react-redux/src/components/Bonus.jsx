function Bonus({ bonus, incrementBonus}) {

    return (
      <div className="container">
          <h4>Bonus Component</h4>
          <h3>Total point : {bonus.points} </h3>
          <button onClick={incrementBonus}> Increment + </button>
      </div>
    )
  }
  
  export default Bonus;