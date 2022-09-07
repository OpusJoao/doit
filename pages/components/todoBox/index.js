import styles from '../../../styles/ToDo.module.css'
import { toast } from 'react-toastify'
import { useState } from 'react'
function ToDoBox(prop) {
  const backgroundColorsByStatus = {
    complete: '#35a261',
    inProgress: '#a7a7a7',
    uncomplete: '#e05f5f'
  }
  const [isCompleted, setIsCompleted] = useState(prop.status == 'complete')
  function returnBackgroundByStatus(status){
    return backgroundColorsByStatus[status] || backgroundColorsByStatus['inProgress'] 
  }

  function handleClickCheck(e){

    if(prop.status !== 'complete'){
      setIsCompleted(!isCompleted)
      toast.success('Tarefa completa com sucesso!', {position: 'bottom-right'})
    }else{
      toast.error('Não é possível completar tarefa. Tarefa já completa', {position: 'bottom-right'})
    }
    
  }

  return (
      <div className={styles.todo_box} style={{ backgroundColor: returnBackgroundByStatus(prop.status) }}>
        <div className={styles.todo_box_action}>
          <input type='checkbox' id={`todoboxInput${prop.id}`} key={prop.id} onClick={handleClickCheck} checked={isCompleted} readOnly={isCompleted}/>
        </div>
        <div className={styles.todo_box_body}>
          <span>{prop.text}</span>
        </div>
        
      </div>
  )
}

export default ToDoBox