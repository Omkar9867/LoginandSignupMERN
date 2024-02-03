import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.post('http://localhost:5000/', { email, password });
            
            if (res.data.message) {
                return alert('User does not exist');
            }
            history('/home', { state: { id: email } })
        }

        catch (error) {
            console.error(error);
        }
    }


    return (
        <>
        <div>
            <h1>Login Form</h1>

            <form action='POST'>
                <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='' id='' />
                <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='' id='' />

                <input type='submit' onClick={handleSubmit} />
            </form>
            <br />
            <p>OR</p>
            <br />

            <Link to='/signup'> Signup Page</Link>

        </div>
        </>
    )
}

export default Login