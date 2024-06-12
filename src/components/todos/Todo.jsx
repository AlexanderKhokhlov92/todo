import styles from './Todo.module.scss'

const Todo = ({ todo, toggleTodo }) => {
  const checkboxId = `checkbox-${todo.id}`
  return (
    <div className={styles.todoContainer}>
      <div
        className={`${styles.todo} ${
          todo.isCompleted ? styles.completedTodo : ''
        }`}
      >
        <p className={styles.todoText}>{todo.text}</p>
      </div>
      <div className={styles.checkboxWrapper}>
        <input
          onChange={() => {
            toggleTodo(todo.id)
          }}
          className={styles.checkbox}
          type="checkbox"
          checked={todo.isCompleted || false}
          id={checkboxId}
        />
        <label className={styles.label} htmlFor={checkboxId}></label>
      </div>
    </div>
  )
}

export default Todo
