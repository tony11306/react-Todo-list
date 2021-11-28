import Task from "./Task"
function TasksDisplay({ tasks }) {
    return (
        <div className="todo-items">
            {
                tasks.map((task, index) => {
                    console.log(index)
                    return <Task taskName={task["taskName"]} key={index} />
                })
            }
        </div>
    )
}

export default TasksDisplay