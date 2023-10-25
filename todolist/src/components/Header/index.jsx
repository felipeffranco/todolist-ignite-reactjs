import todologo from '../../assets/todologo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './header.module.css'
import { useState } from 'react';

export function Header({ onAddTask }) {
    const [title, setTitle] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(title);
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todologo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    type='text'    
                    placeholder='Adicione uma nova tarefa' 
                    onChange={onChangeTitle} 
                    value={title}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}