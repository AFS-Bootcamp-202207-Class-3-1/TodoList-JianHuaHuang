import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
function TodoListGroup(){
    const inputContentList=useSelector(state=>state.todoList.inputContentList)
    console.log("list",inputContentList ,typeof inputContentList)
    return (
        <>
        {
            inputContentList.map((item,index)=><TodoListItem key={index} item={item} index={index}/>)
        }
        </>
    )
}

export default TodoListGroup