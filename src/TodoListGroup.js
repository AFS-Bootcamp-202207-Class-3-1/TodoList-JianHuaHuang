import TodoListItem from "./TodoListItem";
import  {useContext} from 'react'
import {MsgContext} from './TodoList'
export default function TodoListGroup(){
    const {inputContentList} = useContext(MsgContext)
    // const {inputContentList}=props
    console.log("list",inputContentList ,typeof inputContentList)
    return (
        <>
        {
            inputContentList.map((item,index)=><TodoListItem key={index} item={item} index={index}/>)
        }
        </>
    )
}