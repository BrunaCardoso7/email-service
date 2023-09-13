import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"
import './primeryInput.css'
interface PrimeryInputProps {
    name: string,//vai ser usado na contrução do label
    value: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string
}
export default function PrimeryInput ({ 
    name,
    value, 
    onChange,
    label,
    placeholder
    }: PrimeryInputProps){
    return(
        <div className="input-conteiner">
            <label className="label">{label}</label>
            <Input variant='filled'
            placeholder={placeholder}
            name={ name }
            value={ value }
            onChange={ onChange }/>
        </div>
    )
}