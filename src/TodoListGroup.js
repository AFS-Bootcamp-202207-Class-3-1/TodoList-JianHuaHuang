import TodoListItem from "./TodoListItem";
// import  {useContext} from 'react'
// import {MsgContext} from './TodoList'
export default function TodoListGroup(props){
    // const {inputContentList} = useContext(MsgContext)
    // const {inputContentList}=props
    console.log("list",props.inputContentList ,typeof props.inputContentList)
    return (
        <>
        {
            props.inputContentList.map((item,index)=><TodoListItem key={index} item={item} index={index}/>)
        }
        </>
    )
}