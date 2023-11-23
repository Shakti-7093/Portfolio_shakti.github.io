import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineMail, MdOutlineWhatsapp } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8kzwvgi', 'template_s3pr1n6', form.current, '8cOWX_KxAQB3fSA-E');

    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>shaktigroups01@gmail.com</h5>
            <a href="mailto:shaktigroups01@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp App</h4>
            <h5>Shakti Singh</h5>
            <a href="https://api.whatsapp.com/send?phone=918866467093" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp Web</h4>
            <h5>Shakti Singh</h5>
            <a href="https://web.whatsapp.com/send?phone=918866467093" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="subject" placeholder="Subject" required/>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <input type="text" name="contact" placeholder="Your Contact Number with Country Code" required/>
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary btn-secondry">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
