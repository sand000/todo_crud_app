import { useEffect } from "react";
import { useState } from "react";
import { addTodos, deleteTodo, getData, toggleTodo } from "../api/todoApi";
import AddTodo from "./AddTodo";
import Pagination from "./Pagination";
import TodoList from "./TodoList";

// main Todo
export default function Todo(){

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [taskSortBy, setTaskSortBy ] = useState("asc")
    const [page, setPage] = useState(1);
    useEffect(()=>{
        handleGetTodos()
    },[taskSortBy,page])

// handleGetTodos
    const handleGetTodos = () =>{
        setLoading(true);
       return getData({taskSortBy,page})
          .then(res=>{
            setLoading(false)
             setTodos(res);
          })
            .catch(err=>{
                setLoading(true);
                console.log(err);
            })
    }
// handleAdd 
    const handleAdd = (text)=>{
        const item = {
            id: Date.now(),
            task:text,
            status:false
        }
        setLoading(true);
        addTodos(item)
        handleGetTodos();
    }
// handleToggle
    const handleToggle =(id, newStatus)=>{
        setLoading(true)
        toggleTodo(id,newStatus)
           .then(res=>{
            handleGetTodos()
           })
            .catch(err=>{
                setLoading(false)
            })
    }
// handleDelete
    const handleDelete = (id) =>{
        setLoading(true)
        deleteTodo(id)
           .then(res=>{
            handleGetTodos()
           })
            .catch(err=>{
                setLoading(false)
            })
    }


    // return
    return(
        <div>
            <AddTodo handleAdd={handleAdd}/>
            <br></br>
            <div>
                <button onClick={()=>setTaskSortBy(prev=>prev==="asc"? "desc":"asc")}>
                    {taskSortBy=== "asc"? "Make Decending":"Make Asending"}
                </button>
            </div>
            <br></br>
            <div>{loading && "..Loading"}</div>
            
            {/* <h3>PENDING</h3>
            {todos.filter(el=>!el.status).map(el=> 
               <TodoList 
               id={el.id} 
               key={el.id} 
               status={el.status} 
               task={el.task} 
               handleToggle={handleToggle}
               handleDelete={handleDelete}
               />)}
              
            <h3>COMPLETED</h3> */}
            {/* {todos.filter(el=>el.status).map(el=>  */}

            {todos.map(el=> 
               <TodoList 
               id={el.id} 
               key={el.id} 
               status={el.status} 
               task={el.task} 
               handleToggle={handleToggle}
               handleDelete={handleDelete}
               />)}

             <br></br>
             <br></br>
               <div>
                    {/* <button onClick={()=>setPage(prev=>prev-1)} disabled={page===1}>PREV</button>
                    <button >{page}</button>
                    <button onClick={()=>setPage(prev=>prev+1)}>NEXT</button>                 */}

                    <Pagination total={10} curr={page} onChange={(value)=>setPage(value)}/>

               </div>
        </div>
    )
}