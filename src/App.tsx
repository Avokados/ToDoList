import React, {useState} from 'react';
import './App.css';
import {create} from "domain";
import TodoList from "./TodoList";
import {inspect} from "util";
import './style.css'

/*
C - create
R - read
U - update
D - delete
*/

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed"


function App() {
    const todoListTitle_1: string = 'What to lern'




    const [tasks, setTusks] = useState <Array<TaskType>>([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: true},
    ])

    const removeTask = (taskId: number) => {
        const updateTasks = tasks.filter(task => task.id !== taskId)
        setTusks(updateTasks)
        console.log(tasks)
    }

     const [filter, setFilter] = useState<FilterValuesType>("all")
    console.log(filter)

    const changeTodoListFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }

    let tasksForRender: Array<TaskType> = [];
    if(filter === "all"){
        tasksForRender = tasks
    } else if (filter === "active") {
        tasksForRender = tasks.filter(task => task.isDone === false)
    } else if (filter === "completed"){
        tasksForRender = tasks.filter(task => task.isDone === true)
    }





    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasksForRender} removeTasks={removeTask} changeTodoListFilter={changeTodoListFilter}/>

        </div>

    );
}

export default App;
