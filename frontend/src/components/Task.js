
import {FaCheckDouble,FaEdit, FaRegTrashAlt} from "react-icons/fa"

const Task = ({task,index,deleteTask}) => {// the task an index is from the tasklist.js
  return (
    <div className="task">
        <p>
          <b>{index+1}</b>
          {task.name}
        </p>
        <div className="task-icons">
          <FaCheckDouble color="green"/>
          <FaEdit color="purple"/>
          <FaRegTrashAlt color="red" onClick={() => deleteTask(task._id)}/>
        </div>
        
    </div>
  )
}

export default Task