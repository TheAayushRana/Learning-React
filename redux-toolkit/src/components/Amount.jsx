import { useState } from "react"

export default function Amount() {

const [value, setValue] = useState()
const [account, setAccount] = useState(0)

  return (
    <div className='container'>
      <h4>Account Component</h4>
      <h3> Account : {account} </h3>
      <h3>Total points :  </h3> 
      <button> Increment + </button>
      <button > Decrement - </button>
      <input type='number' onChange={(e)=> setValue(Number(e.target.value))} />
      <button > Increment By {value} + </button>
      <button > Decrement By {value} - </button>
      <button > Intiate Account </button>
    </div>  
  )
}
