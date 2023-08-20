import { useState } from "react"

export default function Bonus() {

  const [points, setPoints] = useState(0)

  return (
    <div className='container'>
      <h4>Bonus Component</h4>
      <h3>Total amount : </h3>
      <h3>Total points : {points} </h3>
      <button>
        Increment +
      </button>
    </div>  
  )
}
