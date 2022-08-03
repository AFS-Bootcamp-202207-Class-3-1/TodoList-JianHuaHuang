import { useState } from "react"
import TodoListGenerator from "./TodoListGenerator"
import TodoListGroup from "./TodoListGroup"
import { useEffect } from "react"
export default function TodoList(){
    const [isShow,setIsShow]=useState(true)
    //让他控制 TodoListGroup的生命周期
    const isShowCallBack=(isShow)=>{
        setIsShow(isShow)
    }
    useEffect(() => {
        setIsShow(true)
    }, [isShow]);
    return (
        <>
        <TodoListGenerator/>
        {isShow && <TodoListGroup isShowCallBack={isShowCallBack}/>}
        </>
    )
}