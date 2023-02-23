import TaskForm from "./TaskForm"
import Task from "./Task"


const TaskList = () => {
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm/>
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks: </b> 0
        </p>
        <p>
          <b>Completed Tasks: </b> 0
        </p>

      </div>
      <hr/>
      <Task/>

    </div>
  )
}

export default TaskList