import api from "./api";

const getTodos=()=>{

    return api.get("/todos");
}
const createTodos=(text)=>{

    return api.post("/todos",{text});
}

const updateTodosToDone=(id,item)=>{

    return api.put(`/todos/${id}`,{...item});
}

const deleteTodos=(id)=>{

    return api.delete(`/todos/${id}`);
}

const updateTodosText=(id,item)=>{

    return api.put(`/todos/${id}`,{...item});
}

export {getTodos,createTodos,updateTodosToDone,deleteTodos,updateTodosText}