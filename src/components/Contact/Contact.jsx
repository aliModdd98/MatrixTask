import React, { useState } from 'react'
import Title from '../Title/Title'
import './ContactStyle.css'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

import {CiLocationOn} from 'react-icons/ci'
import {RiMailSendLine} from 'react-icons/ri'
import {IoMdCall} from 'react-icons/io'
import Footer from '../Footer/Footer'

function Contact() {
    
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
       console.log('Form submitted:', { name, email, subject, message });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    };
  
    return (
    <div className='contactContainer' id='contact'>
        <Title title="Contact US"/>

        <div className="contact">
          <div className="info">  <div className="leftContact">
                <h2>Vesperr</h2>
                <div className="descContact">Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</div>
            <div className="socials">
                <span className='circleIcon'><AiFillTwitterCircle className='icon'/></span>
                <span className='circleIcon'><BiLogoFacebookCircle  className='icon'/></span>
                <span className='circleIcon'><AiFillInstagram  className='icon'/></span>
                <span className='circleIcon'><AiFillLinkedin className='icon' /></span>
            </div>
            </div>


            <div className="centerContact">
    <div className="location"> <CiLocationOn  className='icon'/> A108 Adam Street
New York, NY 535022</div>
<div className="email"><RiMailSendLine  className='icon'/>info@example.com</div>
           <div className="tel"><IoMdCall  className='icon'/>+1 5589 55488 55s</div>
            </div></div>
            <div className="rightContact">

            <form className="formContainer" onSubmit={handleSubmit}>
      <label>
       
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inputField"
          placeholder='Name'
        />
      </label>
      <br />
      <label>
   
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputField"
          placeholder='Email'
        />
      </label>
      <br />
      <label>
        
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="inputField"
          placeholder='Subject'
        />
      </label>
      <br />
      <label>
       
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=" textareaMessage"
          placeholder='Message'
        />
      </label>
      <br />
      <button type="submit" className='submit'>Send</button>
    </form>
    
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact