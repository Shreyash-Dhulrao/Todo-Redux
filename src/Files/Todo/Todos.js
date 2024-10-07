import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todos: [],
    completedTodos: []
}


export const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                Text: action.payload,
                Completed: false,
            }
            state.Todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.Todos = state.Todos.filter(todo => todo.id !== action.payload)
            state.completedTodos = state.completedTodos.filter(todo => todo.id !== action.payload)
        },
        isCompleted: (state, action) => {
            const newVal = state.Todos.find(todo => todo.id === action.payload);
            if (newVal) {
                state.completedTodos = [...state.completedTodos, newVal];
                state.Todos = state.Todos.filter(todo => todo.id !== action.payload);
            }
        }
    }
})

export const { addTodo, removeTodo, isCompleted } = todoSlice.actions

export default todoSlice.reducer