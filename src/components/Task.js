import { useState } from "react"

function Task({ taskName, taskId, onDeleteTask }) {

    const [isFinished, setIsFinished] = useState(false)

    const switchIsFinished = () => {
        setIsFinished(!isFinished)
    }

    return (
        <div className="todo-item"  onClick={() => switchIsFinished()}>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className={"col-11" + (isFinished ? " task-finished" : "")}>
                            {taskName}
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => onDeleteTask(taskId)}></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task