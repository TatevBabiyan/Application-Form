import React, { useState } from 'react';
import styles from './Application.module.css'; 

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    cv: '',
  });

  const [fileName, setFileName] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Successful Application');

    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      cv: '',
    });
    setFileName('');
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000); 
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv' && files.length > 0) {
      setFileName(files[0].name);
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.App}>
      <div className={styles.applicationBox}>
        <h2>Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.userBox}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <label>First Name</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <label>Last Name</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <label>Phone Number</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label>Email</label>
          </div>
          <div className={`${styles.userBox} ${styles.CVBox}`}>
            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="cv">Upload CV</label>
            {fileName && <p>Uploaded File: {fileName}</p>}
          </div>
          <button type="submit" className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          {successMessage && <p>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Application;
