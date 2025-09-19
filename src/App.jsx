import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [taskArr, setTaskArr] = useState([{ task: "No task", id: uuidv4() }])
    const [task, setTask] = useState("")
    const handleChange = (event) => {
        setTask(event.target.value)
    }
    const handleClick = () => {
        setTaskArr([...taskArr, { task: task, id: uuidv4() }])
        setTask("")
    }
    const DeleteTodo = (id) => {
        // console.log(id);
        let filter = taskArr.filter((todo) => todo.id !== id)
        setTaskArr(filter)
        // console.log(filter);
    }
    let toUpperCase = () => {
        setTaskArr(taskArr.map((todo) => {
            return { ...task, task: todo.task.toUpperCase(), id: todo.id }
        }))
        // console.log(result);
    }
    let UpeerCaseOne = (id) => {
        setTaskArr(taskArr.map((todo) => {
            if (todo.id === id) {
                return { ...task, task: todo.task.toUpperCase(), id: id }
            } else {
                return todo;
            }
        }))
        // console.log(result);
    }

    return (
        <div>
            <input type="text" value={task} onChange={handleChange} />
            <br />
            <button onClick={handleClick}>Add task</button>
            <br /><br />

            <h2>list of added task</h2>
            {
                taskArr.map((todo) => (

                    <li key={todo.id}>{todo.task}
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;
                        <button onClick={() => UpeerCaseOne(todo.id)}>Upper Case </button>
                        <hr />
                    </li>
                )
                )
            }
            <button onClick={() => toUpperCase()}>To Upper Case</button>
        </div>
    )
}

export default App

