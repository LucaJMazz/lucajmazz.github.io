import './Projects.css'
import minesweeperImg from '../../assets/minesweeper++.webp'
import portfolioImg from '../../assets/portfolio.webp'
import minuteMathImg from '../../assets/minutemath.webp'
import sniffEmOutImg from '../../assets/sniffemout.webp'
import blockifyImg from '../../assets/blockify.webp'
import LichessRevampedImg from '../../assets/LichessRevamped.webp'
import LinePattern from '../patterns/LinePattern';

const projects = [
    {
        name: 'Blockify',
        desc: 'Image-to-Minecraft-block-art converter with a Spring Boot REST API',
        tools: ['Java', 'Spring Boot', 'Maven', 'REST API', 'Azure'],
        imgSrc: blockifyImg,
        imgAlt: 'Screenshot of Blockify image to Minecraft block converter',
        link: 'https://blockify-a4aaeabxcsfndne9.northcentralus-01.azurewebsites.net',
        viewText: 'View live site',
        span: 'Texture-caching layer using Java HashMaps cuts repeated colour calculations and reduces processing time. Backend deployed on Azure.',
    },
    {
        name: 'Minute Math',
        desc: 'Daily Wordle-style math puzzle game — same challenge for everyone, every day',
        tools: ['React', 'Vite', 'Firebase', 'JavaScript', 'Netlify'],
        imgSrc: minuteMathImg,
        imgAlt: 'Screenshot of Minute Math daily math puzzle game',
        link: 'https://minutemath.netlify.app',
        viewText: 'View live site',
        span: 'Custom API generates and serves daily challenges so puzzles are the same for everyone across time zones. Firebase for data storage, deployed on Netlify.',
    },
    {
        name: 'Portfolio Site',
        desc: 'Personal portfolio site built with React and Vite',
        tools: ['React', 'Vite', 'Tailwind CSS', 'SEO', 'Figma'],
        imgSrc: portfolioImg,
        imgAlt: 'Screenshot of Luca Mazzotta portfolio site showing projects and about me sections',
        link: '/',
        viewText: 'View site',
        span: 'Fully responsive portfolio with smooth UI animations and page transitions. Clean component structure and modern frontend best practices.',
    },
    {
        name: 'Minesweeper++',
        desc: 'Minesweeper game with multiple modes for a new experience',
        tools: ['React', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'JavaScript', 'Netlify'],
        imgSrc: minesweeperImg,
        imgAlt: 'Screenshot of Minesweeper++ game with multiple game modes',
        link: 'https://minesweeper-plus-plus.netlify.app',
        viewText: 'View live site',
        span: 'Centralized game state management with Redux Toolkit. Multiple game modes, dynamic board generation, deployed on Netlify.',
    },
    {
        name: 'Sniff Em Out',
        desc: 'Social deduction mobile app — find the odd person out',
        tools: ['Swift', 'XCode', 'Figma'],
        imgSrc: sniffEmOutImg,
        imgAlt: 'Screenshot of Sniff Em Out social deduction mobile app',
        link: 'https://drive.google.com/file/d/1Pk4NPj4TG63vfzaTHY2iCFxYT-HY1uBJ/view',
        viewText: 'View project file',
        span: 'Pass-and-play mobile architecture with a custom branded UI and custom backend for state management.',
    },
    {
        name: 'Lichess Revamped',
        desc: 'Lichess.com browser extension with board visualizer',
        tools: ['JavaScript', 'HTML', 'CSS'],
        imgSrc: LichessRevampedImg,
        imgAlt: 'Screenshot of Lichess Revamped browser extension board visualizer',
        link: 'https://github.com/LucaJMazz/LichessRavamped',
        viewText: 'View on GitHub',
        span: 'Browser extension that adds custom styling and a board visualizer scraping live games for real-time move data.',
    },
];

function Projects() {
    return (
        <div className='projects-container'>
            <div className='title'>
                <p>[</p> <h1>Projects</h1> <p>]</p>
            </div>
            <p className='projects-subtitle jetbrains-mono'>Things I've built, from daily-puzzle games to full-stack apps.</p>
            <LinePattern className={'pattern-bg'}>
                <div className='projects-content'>
                    <div className='projects-grid'>
                        {projects.map((project) => (
                            <ProjectBox key={project.name} {...project} />
                        ))}
                    </div>
                </div>
            </LinePattern>
        </div>
    );
}

function ProjectBox({ name, desc, tools, imgSrc, imgAlt, link, viewText, span }) {
    return (
        <article className='box-glass'>
            <div className='project-box'>
                <header className='project-header'>
                    <h2 className='project-title jetbrains-mono'>{name}</h2>
                    <p className='project-desc jetbrains-mono'>{desc}</p>
                    <ul className='project-tools'>
                        {tools.map((tool) => (
                            <li key={tool} className='tool jetbrains-mono'>{tool}</li>
                        ))}
                    </ul>
                </header>
                <a
                    className='project-media'
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Open ${name} project`}
                >
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        width={800}
                        height={450}
                        loading='lazy'
                        decoding='async'
                    />
                </a>
                <div className='project-footer'>
                    <a className='project-link jetbrains-mono' href={link} target='_blank' rel='noopener noreferrer'>
                        {viewText} <span aria-hidden='true'>↗</span>
                    </a>
                    <p className='project-note jetbrains-mono'>{span}</p>
                </div>
            </div>
        </article>
    );
}

export default Projects;
