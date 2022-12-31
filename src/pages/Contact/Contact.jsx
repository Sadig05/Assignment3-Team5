import React, {useState} from 'react'
import style from './Contact.module.css'
import axios from 'axios';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3004/messages', {
        subject,
        email,
        content
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subject:
        <input type="text" value={subject} onChange={event => setSubject(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={event => setContent(event.target.value)} />
      </label>
      <br />
      <button type="submit">Send message</button>
    </form>
  );
}

export default Contact