import { useState } from "react";

import TodoInput from "./TodoInput";
import Todolist from "./Todolist";

export default function Todo(){

   
        const [todos, setTodos] = useState([
            {
                id:1,
                title:"Defalt",
                status: false
            }
        ])
    
    const [showCompleted, setShowCompleted] = useState(false);

    
    const handleTaskCreate = (title) => {
        const payload = {
            id: todos.length + 1,
            title: title,
            status: false
        }
        setTodos([...todos, payload]);
    }

    // delete
    const handleDelete = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    }

    // * toggle
    const handleToggle = (id) => {
        const updatedTodos = todos.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        setTodos(updatedTodos);
    }

    return (
        <div  className="MainDiv">
            <TodoInput onTask={handleTaskCreate} />
            {
                todos.filter((item) => !item.status).map((todo) => {
                    return (
                        <Todolist
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            status={todo.status}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    );
                })
            }
            <div>
                <button onClick={() => setShowCompleted(!showCompleted)} >
                SHOW COMPLETED TO-DOS
                </button>
            </div>
            {showCompleted &&
                todos.filter((item) => item.status).map((todo) => {
                    return (
                        <Todolist
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            status={todo.status}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    );
                })
            }
        </div>
    )


        }

