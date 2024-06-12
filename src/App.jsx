import './App.scss'
import TodoForm from './components/todos/TodoForm'
import { useState, useMemo } from 'react'
import Todolist from './components/todos/Todolist'
import { v4 as uuidv4 } from 'uuid'
import TodosActions from './components/todos/TodosActions'
import FilterButtons from './components/ui/FilterButtons'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    if (!text.trim()) {
      return
    }

    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }

  const [filter, setFilter] = useState('all')

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === 'active') {
        return !todo.isCompleted
      } else if (filter === 'completed') {
        return todo.isCompleted
      } else {
        return true
      }
    })
  }, [todos, filter])

  const toggleCompleteHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  const incompleteTodoCount = useMemo(() => {
    return todos.filter((todo) => !todo.isCompleted).length
  }, [todos])

  const deleteCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  return (
    <div className="App light">
      <h1 className="app_main-title">todos</h1>

      <TodoForm addTodo={addTodoHandler}></TodoForm>
      <Todolist
        toggleTodo={toggleCompleteHandler}
        todos={filteredTodos}
        currentFilter={filter}
      />
      <TodosActions
        incompleteTodo={incompleteTodoCount}
        onDeleteCompleted={deleteCompletedHandler}
      >
        <FilterButtons filter={filter} onChange={handleFilterChange} />
      </TodosActions>
    </div>
  )
}

export default App
