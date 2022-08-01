
import {useState,useContext} from 'react'

import {MsgContext} from './TodoList'
export default function TodoListGenerator(){
    const {onAddTodoListCallBack}=useContext(MsgContext);
    const [inputContent,setInputContent]=useState("")
    const onAddClick=()=>{
        onAddTodoListCallBack(inputContent);
    }
    
    return (

        <>
            <label htmlFor="inputTodoList">请输入TodoList的内容</label>
            <input id = "inputTodoList" onChange={(event)=>setInputContent(event.target.value)} type="text" />
            <button onClick={onAddClick}>add</button>
        </>
    )
}