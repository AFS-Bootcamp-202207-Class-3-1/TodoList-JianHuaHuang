
import {useState} from 'react'

// import {MsgContext} from './TodoList'

import {connect} from 'react-redux'
function TodoListGenerator(props){
    // const {onAddTodoListCallBack}=useContext(MsgContext);
    const [inputContent,setInputContent]=useState("")
    const {addTodoContentToList} = props
    const onAddClick=()=>{
        // onAddTodoListCallBack(inputContent);
        addTodoContentToList(inputContent);
    }
    
    return (

        <>
            <label htmlFor="inputTodoList">请输入TodoList的内容</label>
            <input id = "inputTodoList" onChange={(event)=>setInputContent(event.target.value)} type="text" />
            <button onClick={onAddClick}>add</button>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        inputTodoList: state.inputTodoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoContentToList(inputContent){
            const action = {type: 'addTodoContentToList', value: inputContent}
            dispatch(action)
        }
    }
}

// export default TodoListGenerator
export default connect(mapStateToProps, mapDispatchToProps)(TodoListGenerator)