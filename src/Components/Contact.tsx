import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

interface Props {
  contactStart: (position: number) => void;
  updatePosition: (position: number) => void;
}

const Contact: React.FC<Props> = ({ updatePosition, contactStart }) => {
  const contactRef = useRef<any>(null);
  const [confirmationMessageStatus, setConfirmationMessageStatus] =
    useState('hidden');

  useEffect(() => {
    contactStart(contactRef.current.offsetTop);
  }, []);
  useEffect(() => {
    const contactPosition: any = contactRef.current.offsetTop;
    updatePosition(contactPosition);
  }, [updatePosition]);

  const form = useRef<any>('');

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_8kltq91',
        'template_8hqynwp',
        form.current,
        'H4w7hs6ZBHTi8EtuE'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(emailSent);
  };

  const emailSent = () => {
    setConfirmationMessageStatus('visible');
    form.current.reset();
    setTimeout(closeConfirmation, 2000);
  };

  const closeConfirmation = () => {
    setConfirmationMessageStatus('hidden');
  };

  return (
    <div className='contact' id='contact' ref={contactRef}>
      <h2> Contact Me</h2>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <div className='form-name'>
          <label>Name</label>
          <input type='text' name='user_name' placeholder='Andres Castro' />
        </div>
        <div className='form-email'>
          <label>Email</label>
          <input
            type='email'
            name='user_email'
            placeholder='your-email-address@mail.com'
          />
        </div>
        <div className='form-message'>
          <label>Message</label>
          <textarea className='messageBox' name='message' />
        </div>
        <div className='form-submitBtn'>
          <input type='submit' value='Send' />
        </div>
      </form>
      <div className={`confirmationMessage ${confirmationMessageStatus}`}>
        <p> Message sent.</p>
      </div>
      <div className='coolStuff'>
        {' '}
        Here goes some interestinng sool stuff. A call to action, maybe.{' '}
      </div>
    </div>
  );
};

export default Contact;
