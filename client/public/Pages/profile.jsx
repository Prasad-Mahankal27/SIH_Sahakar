import React, { useState } from 'react';

const MyProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Rajesh',
    middleName: 'Kumar',
    lastName: 'Sharma',
    officialEmail: 'rajesh.sharma@example.com',
    mobileNumber: '+91-9876543210',
    governmentId: 'GOV123456',
    adhaarCardNo: '1234 5678 9123',
    panCardNo: 'ABCDE1234F',
    department: 'Civil Engineering', 
    designation: 'Senior Engineer', 
    birthDate: '1975-08-15',
    officeAddress: `456, Government Office Complex,
    Near Central Park,
    Connaught Place,
    New Delhi, 110001,
    India`,
    joiningDate: '2010-01-01',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    setIsEditing(false);
   
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const formStyles = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const inputStyles = {
    width: '100%',
    padding: '8px',
    margin: '6px 0 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const textareaStyles = {
    width: '100%',
    padding: '8px',
    margin: '6px 0 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    height: '100px',
    resize: 'vertical',
  };

  const labelStyles = {
    display: 'block',
    margin: '6px 0',
    fontWeight: 'bold',
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const readOnlyStyles = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
  };

  const headingStyles = {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  };

  return (
    <div style={formStyles}>
      <h1 style={headingStyles}>Profile Info</h1>
      <button onClick={toggleEdit} style={{ ...buttonStyles, marginBottom: '20px' }}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <form onSubmit={handleSubmit}>
        {Object.keys(profile).map((key) => (
          <div key={key}>
            <label htmlFor={key} style={labelStyles}>
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}:
            </label>
            {key === 'department' || key === 'designation' ? (
              <input
                type="text"
                id={key}
                name={key}
                value={profile[key]}
                readOnly
                style={{ ...inputStyles, ...readOnlyStyles }}
              />
            ) : key === 'officeAddress' ? (
              <textarea
                id={key}
                name={key}
                value={profile[key]}
                onChange={isEditing ? handleChange : undefined}
                style={textareaStyles}
                readOnly={!isEditing}
              />
            ) : key === 'birthDate' || key === 'joiningDate' ? (
              <input
                type="date"
                id={key}
                name={key}
                value={profile[key]}
                onChange={isEditing ? handleChange : undefined}
                style={inputStyles}
                readOnly={!isEditing}
              />
            ) : (
              <input
                type={key === 'officialEmail' ? 'email' : 'text'}
                id={key}
                name={key}
                value={profile[key]}
                onChange={isEditing ? handleChange : undefined}
                style={inputStyles}
                readOnly={!isEditing}
              />
            )}
          </div>
        ))}
        {isEditing && <button type="submit" style={buttonStyles}>Save Changes</button>}
      </form>
    </div>
  );
};

export default MyProfile;
