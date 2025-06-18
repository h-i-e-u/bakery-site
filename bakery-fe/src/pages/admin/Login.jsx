import React, { useState } from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title font-amaranth text-2xl mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="email" 
              placeholder="Email"
              className="input input-bordered w-full" 
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            />
            <input 
              type="password" 
              placeholder="Password"
              className="input input-bordered w-full"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
            <button type="submit" className="btn btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login