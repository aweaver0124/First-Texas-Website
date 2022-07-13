import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact(){

  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_form', 'template_or5gfcm', form.current, 'kxK3uFrItlDmFATTX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

  };

  return (
        <div id="contact">
            <div id="contact-us-main">
                <h1>Contact Us</h1>
            </div>
             <div id='contact-form'>
                <h1 id="contact-us-h1">How Can We Help You?</h1>
                <form onSubmit={sendEmail} ref={form}>
                    <p className='message-chars-left'>Name</p>
                    <input 
                        type='text' 
                        name='user_name' 
                        maxLength='30'  />
                    <br/> <br></br>
                    <p className='message-chars-left'>Email</p>
                    <input 
                        type='email' 
                        name='user_email'
                        maxLength='30'  />
                    <br/><br></br>
                    <p className='message-chars-left'>Tell us about the services you're looking for!</p>
                    <textarea 
                        id = 'textarea'
                        name='message'
                        maxLength='1500' />
                    <br/><br></br>
                    {/* <p className='message-chars-left'>{messageCharsLeft}</p> */}
                    <input id="submit-button" type='submit' value='Send' />
                </form>
            </div>
        </div>
  );
};


export default Contact;