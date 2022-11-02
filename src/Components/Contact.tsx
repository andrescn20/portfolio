import React from 'react';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
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
