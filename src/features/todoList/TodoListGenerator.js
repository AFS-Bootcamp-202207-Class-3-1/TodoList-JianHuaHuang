import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateInputContentList } from "./todoListSlice";
import "./todoListGeneratorCss.css";
function TodoListGenerator() {
  const [inputContent, setInputContent] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const onAddClick = () => {
    const data = {
      id: new Date(),
      text: inputContent,
      done: false,
    };
    dispatch(updateInputContentList(data));
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
          {/* <div className="underline"></div> */}
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
