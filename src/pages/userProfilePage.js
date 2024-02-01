// /src/pages/UserProfilePage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfilePage = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    dob: '2000-01-01',
    gender: 'Male',
    allergies: '',
    medicalHistory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated User Data:', userData);
  };

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="dob" value={userData.dob} onChange={handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={userData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
      {/* Display the current user data in a more user-friendly way */}
      <div className="user-data-container">
        <h2>Current User Data</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Date of Birth:</strong> {userData.dob}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
      </div>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default UserProfilePage;
