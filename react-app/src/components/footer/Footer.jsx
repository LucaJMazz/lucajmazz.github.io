import { useState } from 'react';
import LinePattern from '../patterns/LinePattern';
import './Footer.css'

function Footer() {
    const [emailText, setEmailText] = useState('Email: Lucajmazz@gmail.com');
    const viewportWidth = window.innerWidth;

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 786) setEmailText('Email');
        else setEmailText('Email: Lucajmazz@gmail.com');
    });

    return (
        <div className='footer-container h-20'>
            <LinePattern className='footer-pattern h-full'/>
            <div className='overlay flex flex-row justify-center items-center gap-5'>
                <a href='https://github.com/LucaJMazz' className='jetbrains-mono underline'>Github</a>
                <a href='https://www.linkedin.com/in/luca-j-mazzotta/' className='jetbrains-mono underline'>LinkedIn</a>
                <a href='mailto:lucajmazz@gmail.com' className='jetbrains-mono underline'>{emailText}</a>
                <a className='jetbrains-mono underline' href="/Luca Mazzotta, Computer Science - Resume.pdf" download>Resume.pdf</a>
            </div>
        </div>
    );
}

export default Footer;