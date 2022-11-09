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
          <input type='text' name='user_name' placeholder='Andres Castro' />
        </div>
        <div className='form-email'>
          <input
            type='email'
            name='user_email'
            placeholder='your-email-address@mail.com'
          />
        </div>
        <div className='form-message'>
          <textarea className='messageBox' name='message' />
        </div>
        <div>
          <input className='form-submitBtn' type='submit' value='Send' />
        </div>
      </form>
      <div className={`confirmationMessage ${confirmationMessageStatus}`}>
        <p> Message sent.</p>
      </div>
      <div className='contact-info'>
        <h2 className='contact-infoTitle'>Why I Code</h2>
        <p className='contact-infoContent'>
          {' '}
          Since I was a young boy, I've been fascinated with the ability of
          creation we all posses. Being able to understand how our surroundings
          work and manipulating the world with that knowledge seemed like magic.
          Forward to the present and I've now placed all that passion into Front
          End Development. I found a balance I simply enjoy too much: the
          freedom of creativity restrained by the power of code. Ideas and
          imagination might be the foundation of creation, but the struggle of
          bring them to life is what makes me thrive.{' '}
        </p>
      </div>
    </div>
  );
};

export default Contact;
