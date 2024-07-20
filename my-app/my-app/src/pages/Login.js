import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import hp from '../asset/images/hp.png'; // Adjust the path as needed

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/student/', {
        username,
        password,
      });

      
      localStorage.setItem('refreshToken', response.data.refresh);
      localStorage.setItem('accessToken', response.data.access);

      
      console.log('Login successful', response.data);
      navigate('/main/home');
    } catch (error) {
      console.error('Login error', error);
      setError('Invalid credentials');
    }
  };

  return (
    <div className='login-container'>
      <img src={hp} alt="Logo" className='logo'/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <Link to= "Main/home"><button type="submit">Login</button></Link>
        <p><Link to="/register">Create Account</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
