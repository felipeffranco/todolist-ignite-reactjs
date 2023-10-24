// import { useState } from 'react';
// import { FiTrash2 } from 'react-icons/fi';

import styles from '../Task/task.module.css'

export function Task() {
    // const [isChecked, setIsChecked] = useState(false);

    // const handleOnChange = () => {
    //   setIsChecked(!isChecked);
    // };

    return(
        <section>
            <header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>18</span>
                </div>
                <div>
                    <p>Concluídas</p>
                    <span>2/18</span>
                </div>
            </header>
        </section>
    )
}