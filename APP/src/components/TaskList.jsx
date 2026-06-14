import TaskItem from './TaskItem'

function TaskList({ tasks, deleteTask }) {
  return (
    <section className="task-section">
      <h2>Mis tareas</h2>

      {tasks.length === 0 ? (
        <p className="empty">Aún no hay tareas agregadas.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TaskList