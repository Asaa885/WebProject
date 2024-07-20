import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Combination.css';

const RegisterCombination = () => {
    const [formData, setFormData] = useState({
        combName: '',
        combCode: '',
        first_name: '',
        last_name: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const firstName = localStorage.getItem('first_name');
        const lastName = localStorage.getItem('last_name');

        if (firstName && lastName) {
            setFormData(prevState => ({
                ...prevState,
                first_name: firstName,
                last_name: lastName
            }));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/apply_comb/', formData)
            .then(response => {
                console.log(response.data);
                alert('Combination registered successfully!');
                
                // Store relevant data in local storage
                localStorage.setItem('first_name', formData.first_name);
                localStorage.setItem('last_name', formData.last_name);
                localStorage.setItem('combName', formData.combName);
                localStorage.setItem('combCode', formData.combCode);

                // Redirect to profile page
                navigate('/main/profile');
            })
            .catch(error => {
                console.error('There was an error submitting the combination!', error);
            });
    };

    return (
        <div>
            <h1>Welcome, {formData.first_name}!</h1>
            <form onSubmit={handleSubmit} className="register-combination-form">
                <label>
                    Combination Name:
                    <select 
                        name="combName" 
                        value={formData.combName} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select a combination</option>
                        <option value="HKL">HKL</option>
                        <option value="HGK">HGK</option>
                        <option value="HGL">HGL</option>
                        <option value="KLF">KLF</option>
                    </select>
                </label>
                <label>
                    Combination Code:
                    <input 
                        type="text" 
                        name="combCode" 
                        value={formData.combCode} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    First Name:
                    <input 
                        type="text" 
                        name="first_name" 
                        value={formData.first_name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Last Name:
                    <input 
                        type="text" 
                        name="last_name" 
                        value={formData.last_name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterCombination;
