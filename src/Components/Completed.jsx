import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo } from '../Files/Todo/Todos'

const Completed = (props) => {
    const todos = useSelector(task => task.completedTodos)
    const dispatch = useDispatch();
  return (
    <>
        {props.option && (
            <div>
            {todos.map((items) =>{
                return(
                    <div key={items.id} className='flex gap-3 justify-center my-3 text-black' >
                       <div className='bg-green-200 flex w-1/2 justify-between  py-3 rounded-md px-5'>
                        <p className='truncate  w-11/12'>{items.Text}</p>
                       <button onClick={()=>dispatch(removeTodo(items.id))} className='text-lg'>❎</button>
                       </div>
                    </div>
                )
            })}
            </div>
        )}
        </>
  )
}

export default Completed
