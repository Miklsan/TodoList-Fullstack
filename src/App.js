import React,{useState} from "react"
import ModeSwitch from "./components/ModeSwitch"
import Todos from "./components/Todos"
import ModeContextProvider from "./Context/ModeContext"
import AppContainer from "./components/AppContainer"
import date from "./components/Date"
import LoginForm from "./components/LoginForm"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const handleLogoutClick = () => {
    setUsername('')
    setLoggedIn(false)}
  return (
    <ModeContextProvider>
      <AppContainer>
        <div className="container my-4">
          <h1 className="text-center">ToDo List</h1>
          <span>{date}</span>
          <ModeSwitch />
        </div>
        <div>
        <h2 className="text-center mb-3">Login</h2>
        {!loggedIn && (
        <LoginForm setLoggedIn={setLoggedIn} setUsername={setUsername} />
      )}
      {loggedIn && (
        <>
          <Todos username={username} />
        <button type="button" className="btn btn-danger">
          Log out
        </button>
        </>
      )}
        </div>
      </AppContainer>
    </ModeContextProvider>
  )
}

export default App
