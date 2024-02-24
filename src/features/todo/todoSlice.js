import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text:'Hello'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{                                         // isme properties and function aaengi
     addTodo: (state, action) => {                    // hmesha yaha 2 chheze milengi state aur action 
        const todo = {
            id: nanoid(),
            text: action.payload
        }
        state.todos.push(todo);                          // push krta hai todos me jo uper defined hai
                                                        // API call ya database bhi fetch kr skte hai aise 
     },
     removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => {     // jo match krega wo display krega aur jiska id match nhi hu wo nhi display hoga
            todo.id !== action.payload
        })
     },
     updateTodo:(state,action)=>{
         let index=state.todos.findIndex((todo)=>todo.id===action.payload.id)
         state.todos[index]=action.payload;
     }

    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer