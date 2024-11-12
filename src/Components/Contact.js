import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';
import '../styles/tooplate-style.css';

const service = process.env.REACT_APP_SERVICE
const template = process.env.REACT_APP_TEMPLATE
const publickey = process.env.REACT_APP_PUBLIC_KEY


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service, template, form.current, publickey)
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
      <div className="contact-icons">
        <a href="mailto:phanicharan116@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/phanicharan04" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/PHANICHARAN04" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://x.com/PHANICHARAN04" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com/phanicharan.uv" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/phanicharan.udumula" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
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
