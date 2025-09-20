import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [todo, setTodo] = useState([{ task: "No Task", id: uuidv4(), complete: false }])
  const [newTask, setnewTask] = useState("")

  // console.log(task);
  const handleChange = (event) => {
    setnewTask(event.target.value)
    console.log(newTask);

  }
  /////////////add todo
  const handleClick = () => {
    setTodo([...todo, { task: newTask, id: uuidv4(), complete: false }])
    setnewTask("")
  }

  const TodoDelete = ((id) => {
    let filter = todo.filter((arr) => arr.id !== id)
    setTodo(filter)
  })

  const upperCase = ((id) => {
    setTodo(todo.map((arr1) => {
      if (arr1.id === id) {
        return { task: arr1.task.toUpperCase(), id: id }
      } else { return arr1 }
    }))
  })

  const alluppercase = (() => {
    setTodo(todo.map((arr) => {
      return { task: arr.task.toUpperCase(), id: arr.id }
    })
    )
  })

  //////////mark as done or not done

  const toggleTodo = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, id, complete: !todo.complete } : todo
      )
    );
  };


  return (
    <>
      <div>
        <h1>add task</h1>
        <input type="text" value={newTask} onChange={handleChange} placeholder='Enter task' />&nbsp;&nbsp;&nbsp;
        <button onClick={handleClick}>add task</button>
      </div>
      {todo.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.complete ? "line-through" : "none" }}> {todo.task} </span>
          &nbsp;&nbsp;
          <button onClick={() => TodoDelete(todo.id)}>Delete</button>
          <button onClick={() => upperCase(todo.id)}>To UpperCase</button>
          <button onClick={() => toggleTodo(todo.id)}>
            completed
          </button>
          <br />
        </li>
      )

      )}
      <button onClick={alluppercase}>all upper case</button>
    </>
  )
}

export default App
