import React, { useEffect, useState } from 'react'
import './style.css'


const Input = ({number,showColors,setShowColors}) => {


const [value,setValue]=useState({
    Input1: '',
    Input2: '',
    Input3: '',
    Input4: '',
  })

const onlyOne=(e)=>{
  const {id,value}=e.target
  setShowColors(false)

  if (!isNaN(value) && value.length > 1){
    const nuevoValor=value.slice(0,1)

    setValue((prevState)=>({
      ...prevState,
      [id]:nuevoValor
    }))
  }
  else{
    setValue((prevState)=>({
      ...prevState,
      [id]:value
    }))
  }

}

if (showColors===false)
return (

<div>
    <div className='input'>
    <input type="number" id="Input1" onChange={onlyOne} value={value.Input1}/>
    <input type="number" id="Input2" onChange={onlyOne} value={value.Input2} />
    <input type="number" id="Input3" onChange={onlyOne} value={value.Input3}/>    
    <input type="number" id="Input4" onChange={onlyOne} value={value.Input4}/>






    </div>
    </div>



  )
if (showColors===true){

  return (
<div>
    <div className='input'>
    <input type="number" id="Input1" 
    className={parseInt(value.Input1)===number[0]?'verde':parseInt(value.Input1)===number[1]||parseInt(value.Input1)===number[2]||parseInt(value.Input1)===number[3]?
    'amarillo':'rojo'} 
    onChange={onlyOne} value={value.Input1}/>
    <input type="number" id="Input2"  className={parseInt(value.Input2)===number[1]?'verde':parseInt(value.Input2)===number[0]||parseInt(value.Input2)===number[2]||parseInt(value.Input2)===number[3]?
    'amarillo':'rojo'}  onChange={onlyOne} value={value.Input2} />
    <input type="number" id="Input3" className={parseInt(value.Input3)===number[2]?'verde':parseInt(value.Input3)===number[0]||parseInt(value.Input3)===number[1]||parseInt(value.Input3)===number[3]?
    'amarillo':'rojo'}   onChange={onlyOne} value={value.Input3}/>    
    <input type="number" id="Input4" className={parseInt(value.Input4)===number[3]?'verde':parseInt(value.Input4)===number[0]||parseInt(value.Input4)===number[1]||parseInt(value.Input4)===number[2]?
    'amarillo':'rojo'} onChange={onlyOne} value={value.Input4}/>






    </div>
  </div>

 
    
  )}
}

export default Input