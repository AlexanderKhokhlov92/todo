import Todo from './Todo'

const Todolist = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}

export default Todolist
