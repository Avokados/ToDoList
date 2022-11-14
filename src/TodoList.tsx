import React from 'react';
import {FilterValuesType, TaskType} from "./App";
import './style.css'

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (taskId: number)=>void
    changeTodoListFilter: (nextFilterValue: FilterValuesType) => void

}


const TodoList = (props: TodoListPropsType,) => {
    const tasksElements = props.tasks.map((task: TaskType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span> {task.title} </span>
                <button onClick={()=> props.removeTasks(task.id)}>x</button>
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
                    <button onClick={() => props.changeTodoListFilter("all")}>All</button>
                    <button onClick={() => props.changeTodoListFilter("active")}>Active</button>
                    <button onClick={() => props.changeTodoListFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;