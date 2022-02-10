import React from 'react';
import profilePhoto from '../images/photo.jpg';
import mail from '../images/Mail.svg';
import linkedin from '../images/linkedin.svg'

export default function Info() {
    return (
        <div className='info--card'>
            <div className='info--card-img'>
                <img src={profilePhoto} className='info--card-profileph' alt="professionalPhoto"></img>

            </div>
            <div className='info--card-text'>
                <h1>Daniela Correa</h1>
                <h2>Developer</h2>
                <h3>danielacorrea.website</h3>
            </div>
            <div className='info--card-btn'>
                <div className='info--card-btn-mail'>
                    <img src={mail} alt='mail'></img>
                </div>
                <div className='info--card-btn-linkedin'>
                    <img src={linkedin} alt='linkedin'></img>
                </div>
            </div>
        </div>
    )
}