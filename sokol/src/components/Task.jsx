import { useContext } from "react";
import { TasksContext } from "../context/TasksContext.js";


const Task = () => {

    const context = useContext(TasksContext);

    console.log(context.tasks);

    return (
        <>
        </>
    )
}

export default Task;