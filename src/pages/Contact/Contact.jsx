import React, {useState} from 'react'
import style from './Contact.module.css'
import axios from 'axios';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // add a state variable to store the submission status

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!subject || !email || !content) {
      setError('All fields are required');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Invalid email address');
      return;
    }
    setError('');

    try {
      const response = await axios.post('http://localhost:3004/messages', {
        subject,
        email,
        content
      });
      console.log(response);
      setSuccess(true); // set the success state to true
      setTimeout(() => setSuccess(false), 4000); // reset the success state after 4 seconds
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className={style.title}>Contact with Us</h1>
      <form onSubmit={handleSubmit} className={`${style.form} ${style.firstColor}`}>
      {error && <p className={style.error}>{error}</p>}
      {success && ( // show the success message if the success state is true
        <p className={style.success}>
          Message sent successfully!
        </p>
      )}
      <label className={style.label}>
        Subject:
        <input type="text" value={subject} onChange={event => setSubject(event.target.value)} className={style.input} />
      </label>
      <br />
      <label className={style.label}>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} className={style.input} />
      </label>
      <br />
      <label className={style.label}>
        Content:
        <textarea value={content} onChange={event => setContent(event.target.value)} className={style.textarea} />
      </label>
      <br />
      <button type="submit" className={`${style.button} ${style.secondColor}`}>
        Send message
      </button>
    </form>
    </>

    
  );
}

export default Contact