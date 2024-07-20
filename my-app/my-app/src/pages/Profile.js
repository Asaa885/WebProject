import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        first_name: '',
        last_name: '',
        combName: '',
        combCode: ''
    });

    useEffect(() => {
    
        const firstName = localStorage.getItem('first_name');
        const lastName = localStorage.getItem('last_name');
        const combName = localStorage.getItem('combName');
        const combCode = localStorage.getItem('combCode');

        if (firstName && lastName && combName && combCode) {
            setProfileData({
                first_name: firstName,
                last_name: lastName,
                combName: combName,
                combCode: combCode
            });
        }
    }, []);

    return (
        <div className="profile">
            <h1>Profile Details</h1>
            <p><strong>First Name:</strong> {profileData.first_name}</p>
            <p><strong>Last Name:</strong> {profileData.last_name}</p>
            <p><strong>Combination:</strong> {profileData.combName} ({profileData.combCode})</p>
            <p><em>Please wait for approval for your application</em></p>
        </div>
    );
};

export default Profile;
