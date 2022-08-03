import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateInputContentList } from "./todoListSlice";
import "./todoListGeneratorCss.css";
import { createTodos } from "../../api/todoApi";
function TodoListGenerator() {
  const [inputContent, setInputContent] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const onAddClick = () => {
    createTodos(inputContent).then(response=>{
      console.log("createTodos response",response)
      const {data}=response;
      dispatch(updateInputContentList(data));
    })
    setInputContent("");
    setButtonDisabled(true);
  };
  const onChangeInputContent = (event) => {
    let content = event.target.value;
    if (content.trim() !== "" && content) {
      setInputContent(content);
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  };

  return (
    <>
      <div className="wrapper">
        <div className="input-data">
          <input
            id="inputTodoList"
            type="text"
            value={inputContent}
            onChange={onChangeInputContent}
          />
          <label htmlFor="inputTodoList">请输入TodoList的内容 : </label>
        </div>
        <button
          className="btn btn--stripe"
          disabled={buttonDisabled}
          onClick={onAddClick}
        >   
          add
        </button>
      </div>

    </>
  );
}

export default TodoListGenerator;
