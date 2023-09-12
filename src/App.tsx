import { ChangeEventHandler, useState } from 'react'
import './App.css'
import PrimeryInput from './components/Input/PrimeryInput'

function App() {
  const [email, setEmail] = useState("")

  const handleChange = (evt: HTMLInputElement)=>{

    setEmail(evt.target.value)
  }

  return (
    <>
      <PrimeryInput value={ email } onChange={ handleChange } name={ email }/>
    </>
  )
}

export default App
