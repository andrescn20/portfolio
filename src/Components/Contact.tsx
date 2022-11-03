import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC<{ updatePosition: (position: number) => void }> = ({
  updatePosition,
}) => {
  const contactRef = useRef<any>(null);

  useEffect(() => {
    const contactPosition: any = contactRef.current.offsetTop;
    updatePosition(contactPosition - 70);
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
      );
  };

  return (
    <div className='contact' id='contact' ref={contactRef}>
      <h2> Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form>
    </div>
  );
};

export default Contact;
