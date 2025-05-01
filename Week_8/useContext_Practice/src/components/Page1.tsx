import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/context'



const Page1 = () => {

   const value = useContext(MyContext)
   


  return (
    <div>The Value of count in Page1 content is {value.count}</div>
  )
}

export default Page1