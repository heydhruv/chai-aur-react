import React, {useState, useContext} from 'react'
import UserContext from '../../context/UserContext'

function Login() {
    const [username, setUserName] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleLogin = (e) => {
        e.preventDefault()
        setUser({username})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)}/>
            <input type="text" name="passsword" id="password" value={password} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login