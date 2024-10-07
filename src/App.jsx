import { useState } from "react"
import AddTodo from "./Components/addTodo"
import Completed from "./Components/Completed"
import Todos from './Components/Todos'

function App() {
  const [option, setoption] = useState(false)
  return (
    <div className="bg-zinc-900 text-white pt-10 min-h-screen">
      <h2 className="w-full text-center text-2xl font-semibold ">Todo List using Redux Toolkit</h2>
      <AddTodo  setoption={setoption}/>
      <Todos option={option} />
      <Completed option={option}/>
    </div>
  )
}

export default App
