export default function TodoList({task,id,status,handleToggle,handleDelete}){
    return(
        <div style={{display:"flex", gap:"2rem"}}>
            <div style={{display:"flex", gap:"2rem", marginTop:"1rem", height:"20px"}}>
                <b>{task}</b>{status? "DONE":"NOT DONE"}
                <button onClick={()=>handleToggle(id,!status)}>TOGGLE</button>
                <button onClick={()=>handleDelete(id)}>DELETE</button>
            </div>
        </div>
    )
} 