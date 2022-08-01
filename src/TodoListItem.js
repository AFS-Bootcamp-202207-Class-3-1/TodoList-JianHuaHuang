export default function TodoListItem(props){
    const {item,index} =props;
    console.log("item" ,item)
    return (

        <>
            <label htmlFor={index}> todoList{index} :</label>
            <input readOnly id={index}type="text" value={item}></input>
            <br></br>
        </>
    )
}