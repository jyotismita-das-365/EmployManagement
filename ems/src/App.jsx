import { useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage } from "./utils/localStorage"
import { setLocalStorage } from "./utils/localStorage"

function App() {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == 123){
      console.log("This is admin");
    }else if(email == 'user@me.com' && password == 123){
      console.log("This is user")
    }
    else{
      alert("Invalid Crenditials")
    }
  }
  handleLogin('user@me.com',123);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
