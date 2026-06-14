import { useState } from 'react'

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (taskText.trim() === '') {
      return
    }

    addTask(taskText)
    setTaskText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  )
}

export default TaskInput