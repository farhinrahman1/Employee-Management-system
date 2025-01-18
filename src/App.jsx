import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData ) 

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      console.log(user)
    } else if (
      email == "employee1@me.com" && password == "123") {
      setUser("employee")
      console.log(user)

    }
    else {
      alert("Invalid email or password")
    }
    
  }

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {!user =="admin" ? <AdminDashboard/>:<EmployeeDashboard/>}
      {/* {<EmployeeDashboard />} */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App