import { useState } from "react";

const useInput=()=>{
    const [input, setInput] = useState("");

    const onChage = (e) =>{
        setInput(e.target.value)
        console.log(e.target.value)
    }
    
    return [input, onChage]
}

export default useInput