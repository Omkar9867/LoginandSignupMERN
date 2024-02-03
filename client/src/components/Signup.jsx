import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/signup', { email, password });
            console.log(res)
            if (res.data.message) {
                return alert('Already exist!!');
            }

            history('/home', { state: { id: email } });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>SignUp Form</h1>

            <form onSubmit={handleSubmit}>
                <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='email' id='email'/>
                <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='password' id='password'/>

                <input type='submit' value='Submit' />
            </form>
            <br />
            <p>OR</p>
            <br />

            <Link to='/'> Login Page</Link>
        </div>
    );
}

export default Signup;
