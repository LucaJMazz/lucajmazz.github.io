import './Projects.css'
import minesweeperImg from '../../assets/minesweeper++.webp'
import portfolioImg from '../../assets/portfolio.webp'
import minuteMathImg from '../../assets/minutemath.webp'
import sniffEmOutImg from '../../assets/sniffemout.webp'
import blockifyImg from '../../assets/blockify.webp'
import LichessRevampedImg from '../../assets/LichessRevamped.webp'
import LinePattern from '../patterns/LinePattern';

function Projects() {
    return (
        <div className='projects-container flex flex-col justify-center items-center'>
            <div className='title'>
                <p>[</p> <h1>Projects</h1> <p>]</p>
            </div>
            <LinePattern className={'pattern-bg'}>
            <div className='py-15 w-dvw flex justify-center items-center'>
            <div className='grid grid-cols-2 grid-rows-2 gap-15'>
                <ProjectBox name={'Blockify'} 
                desc={'Image-to-Minecraft-block-art converter with a Spring Boot REST API'} 
                tools={['Java', 'Spring Boot', 'Maven', 'REST API', 'Azure']}
                imgSrc={blockifyImg}
                imgAlt={'Screenshot of Blockify image to Minecraft block converter'}
                link={'https://blockify-a4aaeabxcsfndne9.northcentralus-01.azurewebsites.net'}
                viewText={'View live site'}
                span={'Texture-caching layer using Java HashMaps cuts repeated colour calculations and reduces processing time. Backend deployed on Azure.'}/>
                
                <ProjectBox name={'Minute Math'} 
                desc={'Daily Wordle-style math puzzle game — same challenge for everyone, every day'} 
                tools={['React', 'Vite', 'Firebase', 'JavaScript', 'Netlify']}
                imgSrc={minuteMathImg}
                imgAlt={'Screenshot of Minute Math daily math puzzle game'}
                link={'https://minutemath.netlify.app'}
                viewText={'View live site'}
                span={'Custom API generates and serves daily challenges so puzzles are the same for everyone across time zones. Firebase for data storage, deployed on Netlify.'}
                />

                <ProjectBox name={'Portfolio Site'} 
                desc={'Personal portfolio site built with React and Vite'} 
                tools={['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Figma']}
                imgSrc={portfolioImg}
                imgAlt={'Screenshot of Luca Mazzotta portfolio site showing projects and about me sections'}
                link={'/'}
                viewText={'View site'}
                span={'Fully responsive portfolio with smooth UI animations and page transitions. Clean component structure and modern frontend best practices.'}/>
                
                <ProjectBox name={'Minesweeper++'} 
                desc={'Minesweeper game with multiple modes for a new experience'} 
                tools={['React', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'JavaScript', 'Netlify']}
                imgSrc={minesweeperImg}
                imgAlt={'Screenshot of Minesweeper++ game with multiple game modes'}
                link={'https://minesweeper-plus-plus.netlify.app'}
                viewText={'View live site'}
                span={'Centralized game state management with Redux Toolkit. Multiple game modes, dynamic board generation, deployed on Netlify.'}
                />

                <ProjectBox name={'Sniff Em Out'} 
                desc={'Social deduction mobile app — find the odd person out'} 
                tools={['Swift', 'XCode', 'Figma']}
                imgSrc={sniffEmOutImg}
                imgAlt={'Screenshot of Sniff Em Out social deduction mobile app'}
                link={'https://drive.google.com/file/d/1Pk4NPj4TG63vfzaTHY2iCFxYT-HY1uBJ/view'}
                viewText={'View project file'}
                span={'Pass-and-play mobile architecture with a custom branded UI and custom backend for state management.'}
                />

                <ProjectBox name={'Lichess Revamped'} 
                desc={'Lichess.com browser extension with board visualizer'} 
                tools={['JavaScript', 'HTML', 'CSS']}
                imgSrc={LichessRevampedImg}
                imgAlt={'Screenshot of Lichess Revamped browser extension board visualizer'}
                link={'https://github.com/LucaJMazz/LichessRavamped'}
                viewText={'View on GitHub'}
                span={'Browser extension that adds custom styling and a board visualizer scraping live games for real-time move data.'}
                />

            </div>
            </div>
            </LinePattern>
        </div>
    );
}

function ProjectBox({ name, desc, tools, imgSrc, imgAlt, link, viewText, span}) {
    return (
        <div className='box-glass'>
        <div className='project-box h-full'>
            <h2 className='jetbrains-mono text-xl font-extrabold'>{name}</h2>
            <h2 className='jetbrains-mono text-gray-600 mb-5'>{desc}</h2>
            <div className='flex flex-row justify-start items-center flex-wrap'>
                {tools.map((tool, index) => {
                    return <div key={index} className='tool jetbrains-mono text-xs m-0.5'>{tool}</div>
                })} 
            </div>
            <hr className='h-0.5 my-5'/>
            <div className='flex flex-col justify-center items-center'>
                <a href={link} target='_blank' rel="noopener noreferrer" aria-label={`Open ${name} project`}>
                    <img src={imgSrc} alt={imgAlt} width={800} height={450} loading="lazy" decoding="async" />
                </a>
                <p className='jetbrains-mono text-sm text-gray-600 mb-5'>{viewText}</p>
            </div>
            <span className='jetbrains-mono text-sm text-gray-800 mb-5'>{span}</span>
        </div>
        </div>
    );
}

export default Projects;
