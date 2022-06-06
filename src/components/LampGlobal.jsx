import React from 'react'

const LampGlobal = ({isOn, switchLightGlobal}) => {
  
  return (
  <div className='lamp-and-btn'>
    <div className=  { `lamp ${isOn}`} > </div>
    <button className='lamp-btn' onClick={switchLightGlobal}> {isOn} </button>
  </div>

  )
}

export default LampGlobal