function TaskItem({ task, deleteTask }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>

      <button onClick={() => deleteTask(task.id)}>
        Eliminar
      </button>
    </li>
  )
}

export default TaskItem