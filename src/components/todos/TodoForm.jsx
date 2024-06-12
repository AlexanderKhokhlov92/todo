import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import styles from './TodoForm.module.scss'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        className={styles.formInput}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="What needs to bo done"
      />
      <button className={styles.formSubmitButton} type="submit">
        <MdKeyboardArrowDown className={styles.icon} />
      </button>
    </form>
  )
}

export default TodoForm
