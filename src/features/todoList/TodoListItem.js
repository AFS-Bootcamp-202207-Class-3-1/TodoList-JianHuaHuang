import { useDispatch } from "react-redux";
import { updateInputContent, deleteInputContent } from "./todoListSlice";
import "./todoList.css";
export default function TodoListItem(props) {
  const { item, index } = props;
  const dispatch = useDispatch();
  const onClickX = (event) => {
    event.preventDefault();
    dispatch(deleteInputContent({ index }));
  };
  const onClickItem = (event) => {
    event.preventDefault();
    dispatch(updateInputContent({ index }));
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
