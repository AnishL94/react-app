import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"
import ToDoList from "./components/ToDoList";


// {
//   id: 1,
//   name: 'ToDo1',
//   complete: false,
// }
const LOCAL_STORAGE_KEY = 'todosApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const toDoNameRef = useRef()

  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddToDo(e) {
    const name = toDoNameRef.current.value
    if(name === '') return 

    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })

    toDoNameRef.current.value = null
  }


  return (
    <>
      <ToDoList todos={todos} />
      <input ref={toDoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add To Do</button>
      <button>Clear Completed</button>
      <div>0 tasks to do</div>
    </>
  );
}

export default App;
