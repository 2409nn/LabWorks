import TasksList from "./components/TasksList.jsx"
import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx"

function App() {

  const [tasks, setTasks] = useState([{id: Date.now(), title: 'Поспать', description: 'С 22:00 до 6:00'}]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
      <>
        <TasksList tasks={tasks} setTasks={setTasks} />
        <TaskForm onAddTask={addTask} />
      </>
  )
}

export default App
