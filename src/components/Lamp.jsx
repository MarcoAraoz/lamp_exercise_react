import React, { useState } from 'react'

const Lamp = () => {

    const [isOn, setisOn] = useState('on')

    const switchLight = () => {
      if (isOn === 'on') {
        setisOn('off') 
      } else {
        setisOn('on')
      }
    }

  return (
    <div className='lamp-and-btn'>
        <div className=  { `lamp ${isOn}`} > </div>
        <button className='lamp-btn' onClick={switchLight}> {isOn} </button>
    </div>

  )
}
export default Lamp