import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext.js"
import { useState } from "react"


const TasksList = () => {

    const [ tasks, setTasks ] = useState(['Task1', 'Task2', 'Task3']);

    return (
        <TasksContext.Provider
            value={{
                tasks: tasks,
            }}
        >

            <div className="todo">
                <Task />
            </div>

        </TasksContext.Provider>
    )
}

export default TasksList;
