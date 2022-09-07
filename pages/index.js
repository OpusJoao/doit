import { useState } from 'react'
import { useTodo } from '../lib/TodoContext'
import styles from '../styles/Home.module.css'
import Box from './components/box'
import ToDoBox from './components/todoBox'
export default function Home() {
  const [currentTodo, setCurrentTodo] = useState('')
  const {todos, setTodos} = useTodo()

  function addTodo(){
    let currentTodos = todos
    let newTodos = [... currentTodos, {text: currentTodo, status: 'inProgress'}]
    setTodos(newTodos)
    setCurrentTodo('')
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1>Doit</h1>
          <Box style={{ marginTop: '2rem', display: 'flex' }}>
            <input className={styles.input} placeholder="O que deseja fazer?" value={currentTodo} onChange={(e) => setCurrentTodo(e.target.value)}/>
            <button className={styles.button} style={{ margintop: '1rem' }} onClick={addTodo}>Adicionar</button>
          </Box>
          <Box style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Para fazer amanhã</h2>
            {todos.map(val => <ToDoBox 
              text={val?.text}
              status={val?.status}
              />)}
          </Box>
        </div>
      </div>
    </>
  )
}
