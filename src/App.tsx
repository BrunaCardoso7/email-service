import { useState } from 'react'
import './App.css'
import PrimeryInput from './components/Input/PrimeryInput'

function App() {
  const [email, setEmail] = useState("")

  // const handleChange = (evt: HTMLInputElement)=>{setEmail(evt.target.value)}

  return (
    <div className='wrapper'>
      <PrimeryInput 
      value={ email } 
      onChange={ evt=>setEmail(evt.target.value) } 
      name={ email } 
      label='Digite seu email:'/>
    </div>
  )
}

export default App
