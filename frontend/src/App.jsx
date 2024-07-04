import React from 'react'
import reactLogo from "./assets/react.svg"
import { CreateTodo } from './components/CreateTodo'
import { Todos } from "./components/Todos"
const App = () => {
  return (
    <div>
    <CreateTodo>
      </CreateTodo>
      <Todos></Todos>
    </div>
  )
}

export default App
