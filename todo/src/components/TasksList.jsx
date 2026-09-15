import Task from "./Task";

const TasksList = ({ tasks, setTasks }) => {
    const handleDelete = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div className="tasks">
            <ul className="tasks__list" style={{ listStyle: "none" }}>
                {tasks.map((data) => (
                    <li className="tasks__list-item" key={data.id}>
                        <Task taskData={data} />

                        <button onClick={() => handleDelete(data.id)}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksList;