import React from 'react';
import './Footer.css'
import fb from './assests/fb.png';
import mail from './assests/mail.png';


export default function Footer(props) {
    return(
        <div className="footer">
            <div className="contact">
                <p className="heading">
                    CONTACT
                </p>
                <p>
                Mihai Gradinaru
                </p>
                <p>
                +40 722 625 464
                </p>
                <p>
                contact@peachartcrew.com
                </p>
                <p>
                www.peachartcrew.com
                </p>
            </div>
            <div className="address">
                <p className="heading">
                    ADDRESS
                </p>
                <p>
                Lido by Aspace
                </p>
                <p>
                108-112 Mihai Eminescu Street
                </p>
                <p>
                Sector 2, Bucharest 030167
                </p>
                <p>
                ROMANIA
                </p>
            </div>
            <div className="social">
                <p className="heading">
                   SOCIAL
                </p>
                <div className="social-icons">
                    <img src={fb} alt="facebook"/>
                    <img src={mail} alt="email"/>
                </div>
                <p>
                &nbsp;
                </p>
                <p>
                Copyright © 2020 <a href="https://peachartcrew.com">PeachART Crew</a> 
                </p>
                <p>
                Web.com Company. All rights reserved.
                </p>
            </div>
        </div>
    )
}