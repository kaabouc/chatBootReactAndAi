import React, { useState } from 'react';
import axios from 'axios';

const ContactAdd = () => {
  const [formData, setFormData] = useState({
    question: '',
    mail: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/contact/create', formData);

      console.log('Contact created successfully:', response.data);

      // Optionally, you can reset the form after successful submission
      setFormData({ question: '', mail: '' });
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <div className="container mt-5">
    <h2>Contact Admin</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="question" className="form-label">Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          value={formData.question}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mail" className="form-label">Mail:</label>
        <input
          type="text"
          id="mail"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Envoyer</button>
    </form>
  </div>
  );
};

export default ContactAdd;
