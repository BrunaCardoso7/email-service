import { useState } from 'react'
import './App.css'
import PrimeryInput from './components/Input/PrimeryInput'
import { Button, Spacer } from '@chakra-ui/react'

function App() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  // const handleChange = (evt: HTMLInputElement)=>{setEmail(evt.target.value)}

  return (
    <div className='wrapper'>
      <form action="">
        <div className='nameUser-wrapper'>
          <PrimeryInput
          value={ name }
          onChange={ evt=>setName(evt.target.value) }
          name={ name }
          label='Nome:'
          placeholder='Genival'/>
          <PrimeryInput
          value={ sobrenome }
          onChange={ evt=>setSobrenome(evt.target.value) }
          name={ sobrenome }
          label='Sobrenome:'
          placeholder='Satis'/>
        </div>
        <PrimeryInput
        value={ email }
        onChange={ evt=>setEmail(evt.target.value) }
        name={ email }
        placeholder='fulano@gmail.com'
        label='Email:'/>
        <Button className='button_submit' colorScheme='green' width="100%">Enviar</Button>
      </form>
      <Spacer width="8" maxW={3}/>
      <div className="product-details">
          <h3>Assinatura mensal</h3>
          <Spacer height="2"/>
          <p>Você irá pagar:</p>
          <span>R$ 250,00</span>
          <Spacer height="2"/>
          <p>Regras:  is simply dummy text of the printing and typesetting industry. </p>
      </div>
    </div>
  )
}

export default App
