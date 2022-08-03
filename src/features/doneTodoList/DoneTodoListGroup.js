
import { useSelector } from "react-redux";
import DoneTodoListItem from "./DoneTodoListItem";
export default function DoneTodoListGroup(){
    const inputContentList=useSelector(state=>state.todoList.inputContentList)
    console.log("list",inputContentList ,typeof inputContentList)
    return (
        <>
        {
            inputContentList.filter(inputContent=>inputContent.done).map((item,index)=><DoneTodoListItem key={item.id} item={item}/>)
        }
        </>
    )
}