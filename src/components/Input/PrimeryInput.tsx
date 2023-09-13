import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"
import './primeryInput.css'
interface PrimeryInputProps {
    name: string,//vai ser usado na contrução do label
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string
}
export default function PrimeryInput ({ 
    name,
    value, 
    onChange,
    label 
    }: PrimeryInputProps){
    return(
        <div className="input-conteiner">
            <label className="label">{label}</label>
            <Input variant='filled'
            placeholder='Digite aqui o email...'
            name={ name }
            value={ value }
            onChange={ onChange }/>
        </div>
    )
}