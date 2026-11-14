import LinePattern from '../patterns/LinePattern.jsx'
import './Landing.css'
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import Reveal from '../Reveal.jsx'

function Landing() {

    return (
        <>
            <div className='landing-container'>
                <LinePattern className={'side-pattern'} />
                <div className='title-container flex flex-col justify-center items-center'>
                    <h1>Luca Mazzotta</h1>
                    <h2 className='text-3xl flex flex-col justify-center text-center items-center'>Computer Science student at York University
                        <Reveal
                            as='hr'
                            className='h-1 reveal-line'
                            amount={0}
                            delay={100} />
                    </h2>

                    <div className='divider h-14' />

                    <Reveal as='h2' className='text-2xl text-center pop-in' delay={200}>
                        Check out my personal portfolio with my projects, info, and more
                    </Reveal>

                    <div className='linkContainer flex flex-row mt-10'>
                        <a href="/Luca Mazzotta, Computer Science - Resume.pdf" download>
                            <Reveal
                                as='h2'
                                delay={320}
                                className='underline text-lg m-2.5 cursor-pointer link pop-in'>
                                <IoDocumentTextOutline className='icon'/> Resume.pdf
                            </Reveal>
                        </a>
                        <a href='https://www.linkedin.com/in/luca-j-mazzotta/' target="_blank" rel="noopener noreferrer">
                            <Reveal
                                as='h2'
                                delay={380}
                                className='underline text-lg m-2.5 cursor-pointer link pop-in'
                            >
                                <RiLinkedinBoxLine /> LinkedIn
                            </Reveal>
                        </a>
                        <a href='https://github.com/LucaJMazz' target="_blank" rel="noopener noreferrer">
                            <Reveal
                                as='h2'
                                delay={440}
                                className='underline text-lg m-2.5 cursor-pointer link pop-in'
                            >
                                <TbBrandGithub /> Github
                            </Reveal>
                        </a>
                    </div>

                </div>
                <LinePattern className={'side-pattern'} />
            </div>
        </>
    )
}

export default Landing
