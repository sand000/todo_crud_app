// GET req
export const getData = (args={}) =>{

    const {taskSortBy="asc", page=1} = args;

    return fetch(`http://localhost:3004/tasks?_sort=task&_order=${taskSortBy}&_page=${page}&_limit=3`)
                 .then(res=> res.json());
}
// POST req
export const addTodos = (todo) =>{
    return fetch(`http://localhost:3004/tasks`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(todo)
    }) .then(res=>res.json())
}
// PATCH req
export const toggleTodo = (id,newStatus) =>{
    return fetch(`http://localhost:3004/tasks/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({status:newStatus})
    }) .then(res=>res.json())
}

// DeleteTodo req
export const deleteTodo = (id) =>{
    return fetch(`http://localhost:3004/tasks/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }) .then(res=>res.json())
}
