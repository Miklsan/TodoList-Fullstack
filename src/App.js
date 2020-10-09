import React from "react"
import ModeSwitch from "./components/ModeSwitch"
import Todos from "./components/Todos"
import ModeContextProvider from "./Context/ModeContext"
import AppContainer from "./components/AppContainer"
import date from "./components/Date"
import LoginForm from "./components/LoginForm"
function App() {
  return (
    <ModeContextProvider>
      <AppContainer>

        <div className="container my-4">
          <h1 className="text-center">ToDo List</h1>
          <span>{date}</span>
          <ModeSwitch />
          <Todos />
        </div>
        <h2 className="text-center">Login</h2>
        <LoginForm />
      </AppContainer>
    </ModeContextProvider>
  )
}

export default App
