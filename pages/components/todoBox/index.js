import styles from '../../../styles/ToDo.module.css'
import { useState } from 'react'
function ToDoBox(props) {
  const backgroundColorsByStatus = {
    complete: '#35a261',
    inProgress: '#a7a7a7',
    uncomplete: '#e05f5f'
  }
  function returnBackgroundByStatus(status){
    return backgroundColorsByStatus[status] || backgroundColorsByStatus['inProgress'] 
  }

  return (
      <div className={styles.todo_box} style={{ backgroundColor: returnBackgroundByStatus(props.status) }}>
        <div className={styles.todo_box_action}>
          <input type='checkbox' id={`todoboxInput${props.id}`} key={props.id} onClick={()=>props.onClick(props.id)} checked={props.status == 'complete'} readOnly={props.status == 'complete'}/>
        </div>
        <div className={styles.todo_box_body}>
          <span>{props.text}</span>
        </div>
        
      </div>
  )
}

export default ToDoBox