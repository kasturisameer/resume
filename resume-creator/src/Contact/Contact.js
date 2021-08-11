import react from 'react';
import fb from '../assets/images/fb.png'
import whatsapp from '../assets/images/whatsapp.png'
import email from '../assets/images/email.png'
import insta from '../assets/images/insta.png'
import linkedin from '../assets/images/linkedin.png'

const openWindow = url => {
    window.open(url)
}

export function Contact() {
    
    return (
        <div>
            <h2>Contact</h2>
            <hr />
            <div className="flex-column-container row">       
                <div className="col-md-6">
                    <button className="contact_btn" onClick={() => openWindow('https://www.facebook.com/imsam45')}><img className="contact_logo" src={fb} /></button>
                    <button className="contact_btn" onClick={() => openWindow('https://www.instagram.com/sameerkasturi/')}><img className="contact_logo" src={insta} /></button>
                    <button className="contact_btn" onClick={() => openWindow('https://in.linkedin.com/in/twr-id-imksameer18')}><img className="contact_logo" src={linkedin} /></button>
                    <button className="contact_btn" onClick={() => openWindow('https://mail.google.com/mail/?view=cm&fs=1&to=kasturisameer585@gmail.com')}> <img className="contact_logo" src={email} /></button>

                </div>
                <div className="col-md-6">
                    <img className="contact_logo" src={whatsapp} /> <span>+91 7801038909</span>
                </div>
            </div>
        </div>
    )
}