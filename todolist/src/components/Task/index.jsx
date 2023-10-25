import { FiTrash2 } from 'react-icons/fi';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import styles from './task.module.css'

export function Task({ task, onDelete, onComplete }){
    return (
        <div className={styles.task}>
            <button 
                className={styles.checkContainer}
                onClick={() => onComplete(task.id)}
            >
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>
            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <FiTrash2 size={20} />
            </button>
        </div>
    )
}