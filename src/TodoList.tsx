import React from 'react';
import {TaskType} from "./App";
import './style.css'

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}


const TodoList = (props: TodoListPropsType,) => {
    const tasksElements = props.tasks.map((task: TaskType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span> {task.title} </span>
                <button onClick={()=> alert(task.title)}>x</button>
            </li>
        )
    })

    return (
        <div>
            <div className={"toDos"}>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul className={"Ul"}>
                    {tasksElements}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;