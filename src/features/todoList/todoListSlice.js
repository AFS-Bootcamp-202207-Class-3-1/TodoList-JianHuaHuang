import { createSlice } from "@reduxjs/toolkit";

const initialState={
    inputContentList:[],

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
            const {id}=action.payload
            const index=state.inputContentList.findIndex(inputContent=>inputContent.id===id);
            state.inputContentList[index].done=!state.inputContentList[index].done

        },
        deleteInputContent:(state,action)=>{
            console.log("deleteInputContent" ,state ,action)
            const {id}=action.payload
            const index=state.inputContentList.findIndex(inputContent=>inputContent.id===id);
            state.inputContentList.splice(index, 1)　
        },
        initInputContentList:(state,action)=>{
            console.log("initInputContentList",state,action)
            state.inputContentList=action.payload;
            // return {...state}
        },
        focusUpdateAll:(state,action)=>{
            return {...state}
        }

    }

})
export const {initInputContentList,updateInputContentList,updateInputContent,deleteInputContent,focusUpdateAll}=todoListSlice.actions;
export default todoListSlice.reducer;