import { useDispatch } from "react-redux";
import { updateInputContent, deleteInputContent } from "./todoListSlice";
// import { focusUpdateAll } from "./todoListSlice";
import { updateTodosToDone,deleteTodos } from "../../api/todoApi";
import "./todoList.css";
export default function TodoListItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const onClickX = (event) => {
    event.preventDefault();
    deleteTodos(item.id).then(response=>{
        console.log("TodoListItem deleteTodos",response)
        // dispatch(focusUpdateAll());
         dispatch(deleteInputContent({id:item.id}));
    })
    
  };
  const onClickItem = (event) => {
    event.preventDefault();

    updateTodosToDone(item.id,{...item,done:!item.done}).then(response=>{
      console.log("TodoListItem updateTodosToDone",response)
      // dispatch(focusUpdateAll());
      dispatch(updateInputContent({id:item.id}))
  })
  };
  return (
    <>
      <div className="wrapper wrapper-light">
        <div className="btn-border-dark">
          <div
            className="btn-border-dark-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <span
              className={item.done ? "textSpanDeleted" : "textSpan"}
              onClick={onClickItem}
            >
              {item.text}
            </span>
            <a href="/#" onClick={onClickX}>
              x
            </a>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}
