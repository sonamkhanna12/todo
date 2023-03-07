import React,{useState} from 'react'
import "./App.css";
function App() {
  const [list,setList]=useState([]);
  const [input,setInput]=useState("");
  const addtodo=(todo)=>{
    const newtodo={
      id:Math.random(),
      todo:todo,
    };
    setList([...list,newtodo])
    setInput("");
  }
  const deletetodo=(id)=>{
     const newList=list.filter((todo)=>todo.id!==id)
     setList(newList);
  }

  return (
    <div>
      <h1>Todo list</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>addtodo(input)}>Add</button>
      <ul>
        {list.map((todo) => <li key={todo.id}>{todo.todo}&nbsp;&nbsp;
        <button onClick={()=>deletetodo(todo.id)}>delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default App
