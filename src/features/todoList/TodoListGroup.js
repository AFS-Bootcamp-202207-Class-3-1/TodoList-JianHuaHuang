import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {getTodos} from "../../api/todoApi.js"
import { useDispatch } from "react-redux";
import { initInputContentList } from "./todoListSlice";
function TodoListGroup(){
    const inputContentList=useSelector(state=>state.todoList.inputContentList)
    console.log("list",inputContentList ,typeof inputContentList)
    const dispatch=useDispatch();
    
    useEffect(()=>{
        //update的时候不建议去搞
        getTodos().then(response=>{
            console.log("todoListGroup getTodos",response)
            const {data}=response;
            dispatch(initInputContentList(data))
        });

    },[])

    return (
        <>
        {
            inputContentList.map((item,index)=><TodoListItem key={item.id} item={item} />)
        }
        </>
    )
}

export default TodoListGroup