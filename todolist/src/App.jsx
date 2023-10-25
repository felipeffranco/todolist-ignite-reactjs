import { useState } from 'react';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import { v4 as uuid } from 'uuid'

import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Estudar javascript",
      isCompleted: true
    },
    {
      id: uuid(),
      title: "Estudar react",
      isCompleted: false
    }
  ]);

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  )
}

export default App

