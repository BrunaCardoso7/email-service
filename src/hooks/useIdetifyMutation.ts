import { PersonData } from './../interface/person-data';
import { useMutation } from "react-query";

import axios from "axios";

const postData = (data: PersonData) => {
    return axios.post("https://localhost:8080/send-data", data)
}

export function useIdetifyMutation(){
    const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: (data: PersonData)=>postData(data)
    })
    return {
        mutate,
        isLoading,
        isSuccess,
        isError
    }
}