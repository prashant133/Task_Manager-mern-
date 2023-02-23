import TaskForm from "./TaskForm"
import Task from "./Task"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios";


const TaskList = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    completed: false
  })
  const {name} = formData //destructing the name property so that we can use it later


  // submit the form
  const handleInputChange = (e) =>{
    const{name,value} =e.target
    setFormData({...formData,[name]:value});//grab the existing propery of the form data and change the name of the form provide by the users
  };

  const createTask = async (e) => {
    e.preventDefault()
    //if name not provided then error using toastify
    if(name === ""){
      return toast.error("Input field empty");
    }
  try {
      await axios.post("http://localhost:5000/api/tasks",formData)// providet the from data to the server
      setFormData({...formData,name:""})// clear the form data in the UI
      toast.success('Task Added Successfully');
  } catch (error) {
    toast.error(error.message);
    
  }
  };
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask}/>
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