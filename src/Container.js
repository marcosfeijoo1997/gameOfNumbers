import React, { useState } from 'react'
import RandomNumber from './RandomNumber'
import Input from './Input'

const Container = () => {
    const [number,setNumber]=useState([])
    const [showColors,setShowColors]=useState(false)
    const [lifes,setLifes]=useState(5)


    const traer=(arr)=>{
        setNumber(arr)
    }
    const attempt=()=>{
      setShowColors(true)

        setLifes(lifes-1)
      
      
      
    }
   
 
    if (lifes===0){
      return(<div>perdiste mamerto, el numero era {number}
            <div>
        <Input number={number} showColors={showColors} setShowColors={setShowColors}/>
        <RandomNumber traer={traer} attempt={attempt} lifes={lifes}/>

        <h1>Te quedan {lifes} vidas {number}</h1>
        
    
   
    </div>
      </div>)
    }



  return (
    <div>
        <Input number={number} showColors={showColors} setShowColors={setShowColors}/>
        <RandomNumber traer={traer} attempt={attempt} lifes={lifes}/>

        <h1>Te quedan {lifes}  {number}vidas</h1>
        
    
   
    </div>
  )
}

export default Container