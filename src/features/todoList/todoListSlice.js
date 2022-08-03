import { createSlice } from "@reduxjs/toolkit";

const initialState={
    inputContentList:[]

}

export const todoListSlice= createSlice({
    name:"todoList",
    initialState,

    reducers : {
        updateInputContentList:(state,action)=>{
            console.log("updateInputContentList" ,state ,action)
            state.inputContentList.push(action.payload)
        },
        updateInputContent:(state,action)=>{
            console.log("updateInputContent" ,state ,action)
            const {index}=action.payload
            state.inputContentList[index].done=!state.inputContentList[index].done

        },
        deleteInputContent:(state,action)=>{
            console.log("deleteInputContent" ,state ,action)
            const {index}=action.payload
            state.inputContentList.splice(index, 1)　
        }

    }

})
export const {updateInputContentList,updateInputContent,deleteInputContent}=todoListSlice.actions;
export default todoListSlice.reducer;