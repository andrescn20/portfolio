import React, { useEffect, useRef } from 'react';

const Contact: React.FC<{ updatePosition: (position: number) => void }> = ({
  updatePosition,
}) => {
  const contactRef = useRef<any>(0);

  useEffect(() => {
    const contactPosition: any = contactRef.current.offsetTop;
    updatePosition(contactPosition);
  }, []);
  return (
    <div className='contact' id='contact' ref={contactRef}>
      <h2> Contact Me</h2>
      <form>
        <input type='text' placeholder='Name'></input>
        <input type='text' placeholder='Type your message here.'></input>
        <button type='submit'>Send Email</button>
      </form>
    </div>
  );
};

export default Contact;
