import React, { useContext } from 'react'
import { MyContext } from '../context/context'

const Button = () => {

const value = useContext(MyContext)

  return (
    <div>
        <button onClick={()=>value.setCount((count)=> count+1)}>Im a Button {value.count}</button>
    </div>
  )
}

export default Button