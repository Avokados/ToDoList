import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TaskType} from "./App";
import './style.css'

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (taskId: string)=>void
    changeTodoListFilter: (nextFilterValue: FilterValuesType) => void
    addTask: (title:string)=>void
}


const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>('')

    const tasksElements = props.tasks.map((task: TaskType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span> {task.title} </span>
                <button onClick={()=> props.removeTasks(task.id)}>x</button>
            </li>
        )
    })

    const setLocalTitle = (e: ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)
    const setOnKey = (e: KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter') {
            props.addTask(title)
        }
    }

    return (
        <div>
            <div className={"toDos"}>
                <h3>{props.title}</h3>
                <div>
                    <input value={title}
                           onKeyDown={setOnKey}
                           onChange={setLocalTitle}/>
                    <button onClick={()=> {
                        props.addTask(title)
                        setTitle('')
                    }}>+</button>
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