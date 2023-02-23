import TaskForm from "./TaskForm"
import Task from "./Task"
import { useEffect,useState  } from "react"
import { toast } from "react-toastify"
import axios from "axios";
import { URL } from "../App";
import loadingImg from "../assests/loader.gif"



const TaskList = () => {

  const [tasks,setTasks] = useState([])// the data will be saved when we fetch the data from the data base.
  const [completedTasks,setCompletedTasks] = useState([])// completed data will be saved.
  const [isLoading,setIsLoading] = useState(false)
  
  const [formData, setFormData] = useState({ // user data will be saved.
    name: "",
    completed: false
  })
  const {name} = formData //destructing the name property so that we can use it later


  // submit the form
  const handleInputChange = (e) =>{
    const{name,value} =e.target
    setFormData({...formData,[name]:value});//grab the existing propery of the form data and change the name of the form provide by the users
  };

  // to get the data from the database
  const getTasks = async () => {
    setIsLoading(true);// while getting the data it is loading
    try {
      const {data} = await axios.get(`${URL}/api/tasks`)
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }

  };

  useEffect(() => {
    getTasks()

  }, [])
  


  const createTask = async (e) => {
    e.preventDefault()
    //if name not provided then error using toastify
    if(name === ""){
      return toast.error("Input field empty");
    }
  try {
      await axios.post(`${URL}/api/tasks`,formData)// provide the from data to the server
      setFormData({...formData,name:""})// clear the form data in the UI
      toast.success('Task Added Successfully');
      getTasks();
  } catch (error) {
    toast.error(error.message);
    
  }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/api/tasks/${id}`)
      getTasks()//reload the page
    } catch (error) {
      toast.error(error.message)
      
    }
  }
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
      {
        isLoading && (
          <div className="--flex-center">
            <img src={loadingImg} alt="Loading"/>
          </div>
        )
      }
      {
        !isLoading && tasks.length === 0 ? (
          <p className="--py">NO task added please add a task</p>
        ) : (
          <>
          {tasks.map((task,index) =>{
            return (
              <Task 
              key={task._id} task={task} 
              index={index} 
              deleteTask={deleteTask}/>
            )
          })}
          </>
        )
      }
      

    </div>
  )
}

export default TaskList