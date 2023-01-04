import React, { useState } from "react";

const TasksContext = React.createContext();

function TasksContextProvider(props) {

    const [tasks, setTasks] = useState([
        {id: 1, text: 'Сделать тестовое'},
        {id: 2, text: 'Сделать тестовое'},
        {id: 3, text: 'Начать зарабатывать 🙌'},
    ]);
    
    const handleAdd = (text) => {
        if(!text) {
            return;
        } else {
            setTasks((list) => {
                return [
                    ...list,
                    {id: Math.random().toString(36).substring(7), text: text}
                ]
            })
        }
    }
    
    const handleDelete = (id) => {
        setTasks((list) => {
            return list.filter((element) => element.id !== id)
        })
    }
    
    return (
    <TasksContext.Provider value={{ tasks, handleAdd, handleDelete }}>
        {props.children}
        </TasksContext.Provider>
        );
    }
    
    export { TasksContextProvider, TasksContext };