import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      console.log(user)
      const admin = authData.admin[0]
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({role: "admin"}))
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: "employee",data: employee}))
      }
    }
    else {
      alert("Invalid email or password")
    }
    
  }

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : user === "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
    </>
  )
}

export default App