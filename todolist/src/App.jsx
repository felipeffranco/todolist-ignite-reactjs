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

  function addTask(taskTitle){
    setTasks([
      ...tasks, 
      {
        id: uuid(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  function deleteTaskByID(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) {
        return {
          ...task, 
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    })
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTaskByID} 
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

export default App

