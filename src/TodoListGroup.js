import TodoListItem from "./TodoListItem";

import {connect} from 'react-redux'
function TodoListGroup(props){
    const {inputContentList}=props
    console.log("list",inputContentList ,typeof inputContentList)
    return (
        <>
        {
            inputContentList.map((item,index)=><TodoListItem key={index} item={item} index={index}/>)
        }
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        inputContentList: state.inputTodoList
    }
}
// export default TodoListGroup
export default connect(mapStateToProps)(TodoListGroup)