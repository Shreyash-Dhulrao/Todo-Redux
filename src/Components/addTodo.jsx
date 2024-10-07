import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Files/Todo/Todos';


const newTodo = (props) => {
    const [inpt, setInpt] = useState("")
    const dispatch = useDispatch()

    const HandleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addTodo(inpt))
        setInpt("")
    }
  return (
    <div>
      <form onSubmit={HandleSubmit} className='flex flex-col items-center justify-center p-3 gap-3'>
        <input type="text" value={inpt} onChange={(e)=>{setInpt(e.currentTarget.value)}} placeholder='Enter Task' className='w-1/2 bg-transparent text-white px-2 py-1 border-b-2 border-zinc-400 outline-none' />
        <button type='submit' className='w-1/2 bg-green-600 text-white hover:bg-green-700 py-2 rounded-md transition duration-300'>Add Task</button>
      </form>
      <div className='w-full justify-center flex'>
      <div className='w-1/2 flex justify-evenly '>
      <button onClick={()=>{props.setoption(false)}} className='p-2 focus:border-green-400 text-lg border-b-2 hover:border-green-500 transition duration-300 border-transparent'>Todo List</button>
      <button onClick={()=>{props.setoption(true)}} className='p-2 focus:border-green-400 text-lg border-b-2 hover:border-green-500 transition duration-300 border-transparent' >Completed Task</button>
      </div>
      </div>
    </div>
  )
}

export default newTodo
