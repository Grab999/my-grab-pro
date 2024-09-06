import { useState } from "react"
export default function Todo(){
    const [todo, setTodo]=useState("");
    const [todoList, setTodolist] = useState([]);
    const handleChange = (event) => {
        setTodo(event.target.value);
        //console.log (todo);
    };
    const handleSubmit =(event) => {
        event.preventDefault();
        let tempList = todoList;
        tempList.push = (todo);
        setTodolist(tempList);
        console.log(todoList);
        setTodo("");
    };
    return(
        <div>
           <form onSubmit={handleSubmit}>
             <input value={todo} onChange={handleChange} type="text"></input>
             <button type="submit">Add</button>
           </form>
           {todoList.map((item) => (
            <h3>{item}</h3>
           ))}
        </div>
    );
}