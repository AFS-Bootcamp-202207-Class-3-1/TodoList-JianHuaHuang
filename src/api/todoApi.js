import api from "./api";

const getTodos=()=>{

    return api.get("/todos2");
}
const createTodos=(text)=>{

    return api.post("/todos2",{text});
}

const updateTodosToDone=(id,item)=>{

    return api.put(`/todos2/${id}`,{...item});
}

const deleteTodos=(id)=>{

    return api.delete(`/todos2/${id}`);
}
const updateTodosText=(id,item)=>{

    return api.put(`/todos2/${id}`,{...item});
}

export {getTodos,createTodos,updateTodosToDone,deleteTodos,updateTodosText}