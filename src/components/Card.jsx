import React from 'react'
//import { useState } from 'react'

const Card = ({name, isActive, changeState}) => {




  return (
      <article className='card'>
          <h2>{ name }</h2>
          <p>Estado: <b> {isActive} </b> </p>
          <button onClick={changeState}>Cambiar estado</button>
      </article>
  )
}

export default Card