import { Header } from './components/Header'
import { Task } from './components/Task'

import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <Task />
    </>
  )
}

export default App



/*
<div className={styles.wrapper}>
  <form action="" className={styles.container}>
    <div className={styles.task}>
      <input 
        type="checkbox" 
        name="HTML" 
        className={styles.checkmark} 
        value="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        checked={isChecked}
        onChange={handleOnChange}
      />
      Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      <button><FiTrash2 size={20} /></button>
    </div>        
  </form>

  <div className="result">
    Above checkbox is {isChecked ? "checked" : "unchecked"}.
  </div>
</div>
*/