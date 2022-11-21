import React, {useState} from 'react';
import './App.css';
import {create} from "domain";
import TodoList from "./TodoList";
import {inspect} from "util";
import './style.css'
import {v1} from "uuid";


/*
C - create
R - read
U - update
D - delete
*/

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed"


function App() {


    const todoListTitle_1: string = 'What to lern'
    console.log('a')



    const [tasks, setTusks] = useState <Array<TaskType>>([
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "React", isDone: true},
    ])

    const removeTask = (taskId: string) => {
        const updateTasks = tasks.filter(task => task.id !== taskId)
        setTusks(updateTasks)
        console.log(tasks)
    }

    const addTask = (title:string) => {
        setTusks([{id: v1(), title, isDone: false}, ...tasks])
        }



     const [filter, setFilter] = useState<FilterValuesType>("all")
    console.log(filter)

    const changeTodoListFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }





    const getFilteredTasks = (tasks:Array<TaskType>, filter: FilterValuesType): Array<TaskType> => {
        switch (filter) {
            case "completed":
                return tasks.filter(task => task.isDone)
            case "active":
                return  tasks.filter(task => !task.isDone)
            default:
                return tasks
        }
    }

    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={getFilteredTasks(tasks,filter)} addTask={addTask} removeTasks={removeTask} changeTodoListFilter={changeTodoListFilter}/>

        </div>

    );
}

export default App;
