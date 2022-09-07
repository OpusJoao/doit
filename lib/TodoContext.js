import React, { useContext, useState } from 'react'

export const initialTodos = []

export const TodoContext = React.createContext({
  todos: initialTodos,
  setTodos: async (todo) => null,
})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState(initialTodos)
  return <TodoContext.Provider value={{todos, setTodos}}>{children}</TodoContext.Provider>
}