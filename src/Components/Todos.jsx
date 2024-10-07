import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo , isCompleted} from '../Files/Todo/Todos'

const Todos = (props) => {
    const Todos = useSelector(state => state.Todos)
    const dispatch = useDispatch();

    return (
        <div>
           {(props.option === false)&& ( 
            <div>
                {Todos.map((todo)=>{
                    return (
                        <div key={todo.id} className='flex gap-3 justify-center my-3 text-black' >
                            <div className='bg-green-200 flex w-1/2 justify-between  py-3 rounded-md px-5'>
                            <p className='truncate'>{todo.Text}</p>
                            <div className='px-3 flex gap-3'>
                            <button onClick={()=>dispatch(removeTodo(todo.id))} className='text-lg'>❎</button>
                            <button onClick={() =>{dispatch(isCompleted(todo.id))}} className='text-lg'>✅</button>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            )
            }
        </div>
    )
}

export default Todos
