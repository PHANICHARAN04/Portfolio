import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iazne3q', 'template_72nzh17', form.current, '2MU675HFAYpSY-0CV')
      .then(
        () => {
          toast.success('Message sent successfully!');
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div id="contact" className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Contact Me ✉️</h2>
        <label>Name</label>
        <input type="text" name="from_name" className="input-field" required />
        <label>Email</label>
        <input type="email" name="from_email" className="input-field" required />
        <label>Message</label>
        <textarea name="message" className="input-field" required />
        <input type="submit" value="Send" className="submit-button" />
      </form>
      <ToastContainer />
    </div>
  );
};
