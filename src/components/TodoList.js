import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import Task from "./Task"

function TodoList(props) {

    const [tasks, setTasks] = useState([])
    const [ids, setIds] = useState(0)
    const handleAddingTask = (taskName) => {
        let currentTasks = [...tasks]
        currentTasks.push({
            taskName: taskName,
            id: ids
        })
        setIds(ids + 1)
        setTasks(currentTasks)
    }

    const clearAllTasks = () => {
        setTasks([])
    }

    const handleDeletingTask = (taskId) => {
        let newTasks = tasks.filter(task => task['id'] !== taskId)
        setTasks(newTasks)
    }

    return (
        <div className="container">
            <div className="todo-list">
                <div className="row">
                    <h2 className="text-center"> Todo List </h2>
                </div>
                <div className="row">
                    <AddTaskForm onAddingTask={handleAddingTask} />
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button" onClick={clearAllTasks}>Clear all</button>
                    </div>
                </div>
                <div className="row">
                    <div className="tasks">
                        <h5 className="text-center">You have {tasks.length !== 0 ? tasks.length : "no"} tasks.</h5>
                        {
                            tasks.map((task, index) => { return <Task key={index} taskName={task["taskName"]} taskId={task["id"]} onDeleteTask={handleDeletingTask} /> })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodoList