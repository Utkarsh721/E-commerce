import React, { useState } from 'react';
import classes from "./Contact.module.css";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission (e.g., send an email)
    // You can access the form data in the 'name', 'email', and 'message' state variables
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear the form inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={classes.container}>
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, please feel free to reach out to us.</p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;