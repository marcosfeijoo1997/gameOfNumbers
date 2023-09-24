import React, { useEffect, useState } from 'react'

const RandomNumber = ({traer,attempt,lifes}) => {
  const [random, setRandom] = useState(generarNumAleatorio());
const [checkbox,setCheckbox]=useState(false)

const isChecked=()=>{
checkbox===true?setCheckbox(false):setCheckbox(true)

}


const arrNumbers=[]
const NumA=Math.round(Math.random()*9)
arrNumbers.push(NumA)
console.log(NumA,arrNumbers)
  function generarNumAleatorio(){return[
Math.round(Math.random()*9),
Math.round(Math.random()*9),
Math.round(Math.random()*9),
Math.round(Math.random()*9)]}
const actualizarRandom=()=>{

  const nuevosNumeros=generarNumAleatorio();
  if (checkbox===true){
  setRandom(nuevosNumeros)
  traer(nuevosNumeros)}
  if (checkbox===false){
    setRandom(arrNumbers)
    traer(arrNumbers)}
  



  
}
useEffect(()=>{actualizarRandom()},[checkbox])


  return (
    <div>
   <p>con repeticion <input type='checkbox' onChange={isChecked}></input></p> 
    <button onClick={actualizarRandom}>Cambiar numero</button>
    <button onClick={attempt} disabled={lifes<=0}>Probar numero </button>
    <h1>{NumA}</h1>

    
    
    </div>
  )
}

export default RandomNumber