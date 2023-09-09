import { Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ExpenseTracker from "./Pages/ExpenseTracker"
import { UserContextProvider } from "./UserContext"

function App() {
  return(
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/Tracker" element={<ExpenseTracker />}/>
    </Routes>
    </UserContextProvider>
  )
}

export default App
