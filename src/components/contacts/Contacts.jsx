import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const MessageSentPopup = ({ clearMessage }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [clearMessage]);

  return (
    <div className="popup">
      <p>Message sent!</p>
    </div>
  );
};

const Contact = () => {
  const [messageSent, setMessageSent] = React.useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sqsvjsa', 'template_lqu29sm', form.current, '5WbGYpvR1A1ipkdbd').then(() => {
      setMessageSent(true);
      e.target.reset();

      setTimeout(() => {
        setMessageSent(false);
      },2000);
    });
    
  };
  return (
    <section id='contact'>
      <h5> Get in Touch </h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>devgoel30@gmail.com</h5>
            <a href="mailto:devgoel30@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+13126199908</h5>
            <a href="https://web.whatsapp.com/send?phone=+13126199908" target="_blank">Send a message</a>
          </article>
          

        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your full name' required/>
            <input type="email" name="email" placeholder='Your email' required/>
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type='submit' className='btn btn-primary'> Send Message </button>
          </form>
          {messageSent && <MessageSentPopup clearMessage={() => setMessageSent(false)}/>}
          
      </div>
    </section>
  )
}

export default Contact