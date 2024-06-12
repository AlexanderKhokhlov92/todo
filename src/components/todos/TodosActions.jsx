import styles from './TodosActions.module.scss'

const TodosActions = ({ children, incompleteTodo, onDeleteCompleted }) => {
  return (
    <div className={styles.todosActionsWrapper}>
      <p className={styles.incompleteTodoCounter}>
        {incompleteTodo} items left
      </p>
      {children}
      <button className={styles.deleteButton} onClick={onDeleteCompleted}>
        Clear completed
      </button>
    </div>
  )
}

export default TodosActions
