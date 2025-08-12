import React ,{useContext,useState} from 'react'
import UserContext from '../context/userContext'

function Login() {
     const [password,setPassword]=useState('')
     const [userName,setUserName]=useState('')

     const {setUser}=useContext(UserContext)


    const handleSubmit=(e)=>{
         e.preventDefault();
         setUser({userName,password})   
    }
    return (
        
        <div >
            <h2>Login</h2>
            <input type="text"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder='username' />

            <input type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password' />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
