import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ApplyNow.css';

const ApplyForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: '',
        address: '',
        nida_id: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/application/', formData)
            .then(response => {
                console.log(response.data);
                alert('Application submitted successfully!');
                
                // Store first_name and last_name in local storage
                localStorage.setItem('first_name', formData.first_name);
                localStorage.setItem('last_name', formData.last_name);
                
                navigate('/main/combination');
            })
            .catch(error => {
                console.error('There was an error submitting the application!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="apply-form">
            <label>
                First Name:
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
            </label>
            <label>
                Last Name:
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
            </label>
            <label>
                Date of Birth:
                <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
            </label>
            <label>
                Gender:
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
            </label>
            <label>
                Address:
                <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
            </label>
            <label>
                NIDA ID:
                <input type="text" name="nida_id" value={formData.nida_id} onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ApplyForm;
