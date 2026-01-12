import LinePattern from '../patterns/LinePattern';
import './Footer.css'

function Footer() {

    return (
        <div className='footer-container h-20 fle'>
            <LinePattern className='footer-pattern h-full'/>
            <div className='overlay flex flex-row justify-center items-center gap-5'>
                <a href='https://github.com/LucaJMazz' className='jetbrains-mono text-sm underline'>Github</a>
                <a href='https://www.linkedin.com/in/luca-j-mazzotta/' className='jetbrains-mono text-sm underline'>LinkedIn</a>
                <a href='mailto:lucajmazz@gmail.com' className='jetbrains-mono text-sm underline'>Email: lucajmazz@gmail.com</a>
                <a className='jetbrains-mono text-sm underline' href="/Luca Mazzotta, Computer Science - Resume.pdf" download>Resume.pdf</a>
            </div>
        </div>
    );
}

export default Footer;