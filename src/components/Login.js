import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
        <form>
            <h2>Login</h2>
            <div>
                
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            
            <div>
                <button>Login</button>
                <Link to="/Dashboard">Dashboard</Link>
            </div>
        </form>
        <br></br>
        <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login