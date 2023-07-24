import React from 'react'

const Home = () => {
    const logout=()=>{
        localStorage.removeItem("signup")
        window.location.reload()
    }
    const deleteAccount=()=> {
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>

    <h1>HOMEPAGE</h1>
    <p>WELCOME TO HOMEPAGE</p>
    <button onClick={logout}>logout</button>
    <button onClick={deleteAccount}>Delete account</button> 
    </div>
  )
}

export default Home
