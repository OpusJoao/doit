
import styles from '../../../styles/Box.module.css'
function Box(props){
  return(
    <div className={styles.box} style={props.style}>
      {props.children}
    </div>
  )
}

export default Box