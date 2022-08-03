

export default function DoneTodoListItem(props){
    const { item } = props;
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
                >
                  {item.text}
                </span>
              </div>
            </div>
          </div>
          <br></br>
        </>
      );
}