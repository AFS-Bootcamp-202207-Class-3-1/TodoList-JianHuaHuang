// 定义默认数据
 // eslint-disable-next-line
const defaultState = {
    inputTodoList: []
}

// 导出一个函数
 // eslint-disable-next-line
export default (state=defaultState, action) => {
    console.log("state",state)
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type==="addTodoContentToList"){
        newState.inputTodoList.push(action.value);
    }
    return newState;
}