import React from 'react';
import twitter from '../images/TwitterIcon.svg';
import facebook from '../images/FacebookIcon.svg';
import instagram from '../images/InstagramIcon.svg';
import github from '../images/GitHubIcon.svg';


export default function Footer() {
    return (
        <div className='info--card-footer'>
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={instagram}></img>
            <img src={github}></img>


        </div>
    )
}