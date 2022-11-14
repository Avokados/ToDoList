import React from 'react';
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



function App() {
    const todoListTitle_1: string = 'What to lern'


    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: true},
    ]



    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>

        </div>

    );
}

export default App;
