import { useState } from 'react'
import { useTodo } from '../lib/TodoContext'
import styles from '../styles/Home.module.css'
import Box from './components/box'
import ToDoBox from './components/todoBox'
import { toast } from 'react-toastify'

export default function Home() {
  const [currentTodo, setCurrentTodo] = useState('')
  const {todos, setTodos} = useTodo()

  function addTodo(){
    let currentTodos = todos
    let lastId = currentTodos[currentTodos.length - 1]?.id 
    lastId = !!lastId ? lastId : 0
    let newTodos = [... currentTodos, {id: lastId + 1, text: currentTodo, status: 'inProgress'}]
    setTodos(newTodos)
    setCurrentTodo('')
  }

  function handleClickCheck(idTodo){
    //getByIdTodo
    const currentTodo = todos.filter(todo => todo?.id === idTodo).pop()
    if(currentTodo?.status !== 'complete'){
    //update no context api
      const todosUpdated = todos.map(todo => {        
        if(todo?.id == idTodo){
          return {...todo, status: 'complete'}
        }
        return todo
      })
      setTodos(todosUpdated)
      toast.success('Tarefa completa com sucesso!', {position: 'bottom-right'})
    }else{
      toast.error('Não é possível completar tarefa. Tarefa já completa', {position: 'bottom-right'})
    }
  }

  function handleOnKeyDown(e){
    if(e.key === 'Enter'){
      addTodo()
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1>Doit</h1>
          <Box style={{ marginTop: '2rem', display: 'flex' }}>
            <input className={styles.input} placeholder="O que deseja fazer?" value={currentTodo} onChange={(e) => setCurrentTodo(e.target.value)} onKeyDown={handleOnKeyDown}/>
            <button className={styles.button} style={{ margintop: '1rem' }} onClick={addTodo}>Adicionar</button>
          </Box>
          <Box style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Para fazer amanhã</h2>
            {todos.map(val => <ToDoBox 
              key={val?.id}
              text={val?.text}
              status={val?.status}
              id={val?.id}
              onClick={handleClickCheck}
              />)}
          </Box>
        </div>
      </div>
    </>
  )
}
