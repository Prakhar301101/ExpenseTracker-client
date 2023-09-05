import { Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ExpenseTracker from "./Pages/ExpenseTracker"

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/Tracker" element={<ExpenseTracker />}/>
    </Routes>
  )
}

export default App
