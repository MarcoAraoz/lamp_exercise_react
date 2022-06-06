import React from 'react'
import { useState } from 'react'
import LampGlobal from './LampGlobal'

const GlobalLamps = () => {

    const [isOnGlobal, setisOnGlobal] = useState('on')
    const switchLightGlobal = () => {
        if(isOnGlobal === 'off') {
            setisOnGlobal('on') 
        } else {
            setisOnGlobal('off')
        }
    }

  return (
    <div className='global-lamps'>
        <LampGlobal
            isOn={isOnGlobal}
            switchLightGlobal= {switchLightGlobal}
        />
        <LampGlobal
            isOn={isOnGlobal}
            switchLightGlobal= {switchLightGlobal}
        />
        <LampGlobal
            isOn={isOnGlobal}
            switchLightGlobal= {switchLightGlobal}
        />
    </div>
  )
}

export default GlobalLamps