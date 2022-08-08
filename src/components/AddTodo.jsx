import { useState } from "react"

export default function AddTodo({handleAdd}){

    const [text,setText] = useState("");

    const handleSubmit =()=>{
        handleAdd(text);
    }
    return(
        <div>
            <input placeholder="write" onChange={(e)=>setText(e.target.value)}/> 
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}