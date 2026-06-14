import { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <main className={darkMode ? 'app dark' : 'app light'}>
      <section className="container">
        <header className="header">
          <h1>APP Fabian</h1>
          <p>Mi primera aplicación en React: lista de tareas interactiva.</p>

          <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
          </button>
        </header>

        <TaskInput addTask={addTask} />

        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </section>
    </main>
  )
}

export default App