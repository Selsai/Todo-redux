import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Utilisation directe de push() grâce à Immer
      state.todos.push({
        id: Date.now(),
        texte: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      // Modification directe de l'objet trouvé
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
