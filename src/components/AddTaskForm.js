import { useState } from "react"

function AddTaskForm({ onAddingTask }) {

    const [taskNameInput, setTaskNameInput] = useState("")

    const onCreateButtonPressed = () => {

        if(taskNameInput.length === 0) {
            return
        }
        onAddingTask(taskNameInput)
        setTaskNameInput("")
    }

    return (
        <div className="add-task-form">
            <form onSubmit={ e => { e.preventDefault() } }>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Task to add</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={ taskNameInput } placeholder="Cook dinner" onChange={ (e) => setTaskNameInput(e.target.value) }/>
                <button className="btn btn-primary" type="submit" onClick={ onCreateButtonPressed }>Create</button>
            </div>
            </form>
        </div>
    )
}

export default AddTaskForm