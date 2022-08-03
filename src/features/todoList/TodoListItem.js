import { updateTodosToDone,deleteTodos } from "../../api/todoApi";
import "./todoList.css";
export default function TodoListItem(props) {
  const {isShowCallBack}=props;
  const { item } = props;
  const onClickX = (event) => {
    event.preventDefault();
    deleteTodos(item.id).then(response=>{
        console.log("TodoListItem deleteTodos",response)
        isShowCallBack(false)
    })
    
  };
  const onClickItem = (event) => {
    event.preventDefault();

    updateTodosToDone(item.id,{...item,done:!item.done}).then(response=>{
      console.log("TodoListItem updateTodosToDone",response)
      isShowCallBack(false)
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
