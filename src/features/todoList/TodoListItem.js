import { updateTodosToDone, deleteTodos ,updateTodosText} from "../../api/todoApi";
import "./todoList.css";
import { EditOutlined } from "@ant-design/icons";
import { Input, Tooltip, Popconfirm } from "antd";
import { useState } from "react";
export default function TodoListItem(props) {
  const { isShowCallBack } = props;
  const { item } = props;
  const [isInput, setIsInput] = useState(false);
  const [visible, setVisible] = useState(false);
  const [newInput, setNewInput] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);

  const onClickX = (event) => {
    event.preventDefault();
    deleteTodos(item.id).then((response) => {
      console.log("TodoListItem deleteTodos", response);
      //todo 
      isShowCallBack(false);
    });
  };
  const onClickItem = (event) => {
    event.preventDefault();

    updateTodosToDone(item.id, { ...item, done: !item.done }).then(
      (response) => {
        console.log("TodoListItem updateTodosToDone", response);
        isShowCallBack(false);
      }
    );
  };
  const onClickEditOutlined = () => {
    console.log("this is ture?");
    setIsInput(true);
    setVisible(true);
  };
  const handleOk = () => {

    if(newInput.trim()==="" || !newInput){
      console.log("这里为空啦啊啊啊啊啊啊啊啊啊")
      setNewInput(item.text)
    }
    setConfirmLoading(true);
    // setTimeout(() => {
    //   setVisible(false);
    //   setConfirmLoading(false);
    // }, 2000);
    const data={
      ...item,
      text:newInput
    }
    updateTodosText(item.id,data).then(response=>{
      console.log("TodoListItem updateTodosText",response);
      setConfirmLoading(false);
      isShowCallBack(false);
    });
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    setIsInput(false);
    // isShowCallBack(false); 是否想要刷新组件周期，有待商榷
  };
  const handleNewInputChange = (event) => {
    const value = event.target.value;
    setNewInput(value);
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
            {!isInput && (
              <span
                className={item.done ? "textSpanDeleted" : "textSpan"}
                onClick={onClickItem}
              >
                {item.text}
              </span>
            )}

            {isInput && (
              <Tooltip
              title="请输入新的内容"
                trigger={["focus"]}
                placement="topLeft"
                overlayClassName="numeric-input"
              >
                <Input
                  value={newInput}
                  onChange={handleNewInputChange}
                  placeholder={item.text}
                  maxLength={25}
                  bordered={false}
                  style={{ width: "200px" }}
                />
              </Tooltip>
            )}

            <div
              style={{
                width: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                marginLeft: "90px",
              }}
            >
              <a style={{ marginRight: "12px" }} href="/#" onClick={onClickX}>
                x
              </a>

              <Popconfirm
                title="是否修改内容？"
                visible={visible}
                onConfirm={handleOk}
                okButtonProps={{
                  loading: confirmLoading,
                }}
                onCancel={handleCancel}
              >
                {/* <Button type="primary" onClick={showPopconfirm}>
                  Open Popconfirm with async logic
                </Button> */}
                <EditOutlined onClick={onClickEditOutlined} />
              </Popconfirm>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}
