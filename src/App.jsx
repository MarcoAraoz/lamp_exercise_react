import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import IndividualLamp from './components/IndividualLamp'
import GlobalLamps from './components/GlobalLamps'


function App() {

  const [isActive, setisActive] = useState('Active')

    const changeState = () => {
      setisActive('Inactivo')
      if(isActive != 'Active') {
        setisActive('Active')
      }
    }

  return (
    <div className="App">
    <Card 
      changeState = {changeState}
      isActive= { isActive } 
      name={'Marco'}
    /> 
    <Card 
      changeState = {changeState}
      isActive= { isActive } 
      name={'Sara'}
    /> 
    <Card 
      changeState = {changeState}
      isActive= { isActive } 
      name={'Pamela'}
    />
    <IndividualLamp />
    <GlobalLamps /> 
    </div>
  
  )
}

export default App