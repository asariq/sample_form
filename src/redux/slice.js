import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        getTodo(state, action) {
            state.splice(0, state.length, ...action.payload)
        },
        addTodo(state, action) {
            state.push(action.payload)
        },
        deleteAllTodo(state) {
            state.length = 0
        },
        deleteTodo(state, action) {
            state.splice(action.payload, 1)
        },
        updateTodo(state, action) {
            const { index, task } = action.payload
            state[index] = task
        }

    },
})


export const { addTodo, deleteAllTodo, deleteTodo, updateTodo, getTodo } = todoSlice.actions
export default todoSlice.reducer