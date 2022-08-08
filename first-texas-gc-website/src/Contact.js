import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import phone_icon_color from "./images_ft/phone_icon_color.png"
import location_icon_color from "./images_ft/location_icon_color.png"
import email_icon_color from "./images_ft/email_icon_color.png"
import Footer from "./Footer";

function Contact(){

  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_form', 'template_wuricqs', form.current, 'kxK3uFrItlDmFATTX')
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
                <h4>Contact us directly, or fill out the form below.</h4>
                <div id="contact-wrapper">
                    <div className='contact-attr'>
                        <img src={phone_icon_color} alt="phone icon" height="100px" width="100px" />
                        <a href="tel: 8179647620" className='white-link'><h3>Office: 817-964-7620</h3></a><a href="tel:8175594819" className='white-link'><h3>Mobile: 817-559-4819</h3></a>
                        
                    </div>
                    <div className='contact-attr'>
                        <img src={location_icon_color} alt="location icon" height="100px" width="100px" />
                        <h3>5412 Seminole Ct.<br></br>Granbury, Texas 76049</h3>
                    </div>
                    <div className='contact-attr'>
                        <img src={email_icon_color} alt="email icon" height="100px" width="130px" />
                        <h3 id="email">firsttexasgeneral@gmail.com</h3>
                    </div>

                </div>
            </div>
            <div id="form-content-wrapper">
                <div id="message-us">
                    <h1>Message Us</h1>
                    <p>Interested in a new roof? Or maybe some new gutters? Please fill out the form with all the required fields and let us know what services you're looking for! We will get back to you within 1 - 5 business days.

                    </p>
                </div>
            <div id="form-wrapper">
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
                        <input id="submit-button" type='submit' value='Send' />
                    </form>
                </div>
            </div>
            </div>
            <Footer />
        </div>
  );
};


export default Contact;