import { FiTrash2 } from 'react-icons/fi';
import styles from './task.module.css'

export function Task({task}){
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>
                {task.title}
            </p>
            <button className={styles.deleteButton}>
                <FiTrash2 size={20} />
            </button>
        </div>
    )
}