import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate,useParams, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        setError('');

        const userData = { username, password, email };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            localStorage.setItem('username', username);
            localStorage.setItem('userId', response.data.id);

            
            navigate('/main/home');
        } catch (error) {
            if (error.response && error.response.data) {
                setError('Error registering user: ' + JSON.stringify(error.response.data));
            } else {
                setError('An unexpected error occurred.');
            }
            console.error('Error registering user:', error);
        }
    };

    return (
        
        <div className="register-container">
            <h2>Register</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={registerUser}>
                <div className="form-group">
                    <label>Username</label><br/>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label><br/>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label><br/>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <Link to="/" className="form-field">Back</Link>
        </div>
    );
};

export default Register;
