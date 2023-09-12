import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"
interface PrimeryInputProps {
    name: string,//vai ser usado na contrução do label
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}
export default function PrimeryInput ({ name, value, onChange }: PrimeryInputProps){
    return(
        <Input variant='filled' 
        placeholder='Filled' 
        name={ name } 
        value={ value } 
        onChange={ onChange }/>
    )
}


