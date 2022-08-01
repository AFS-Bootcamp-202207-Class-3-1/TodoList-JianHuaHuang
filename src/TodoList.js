import TodoListGenerator from "./TodoListGenerator"
import TodoListGroup from "./TodoListGroup"
import {useState,createContext} from 'react'

export const MsgContext = createContext()

export default function TodoList(){
    
    const [inputContentList,setInputContentList]=useState(Array(0))
    const onAddTodoListCallBack=(content)=>{
        console.log("content",content)
        inputContentList.push(content)
        console.log("inputList",inputContentList)
        setInputContentList([...inputContentList])
    }
    return (
        <>
        <MsgContext.Provider value={{inputContentList,onAddTodoListCallBack}}>
        <TodoListGroup/>
        <TodoListGenerator/>
        </MsgContext.Provider>
        </>
    )
}