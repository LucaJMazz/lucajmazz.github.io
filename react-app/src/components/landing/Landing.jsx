import LinePattern from '../patterns/LinePattern.jsx'
import './Landing.css'
import { motion } from 'motion/react'

function Landing() {

    return (
        <>
        <div className='landing-container'>
            <LinePattern className={'side-pattern'}/>
            <div className='title-container flex flex-col justify-center items-center'>
                <h1>Luca Mazzotta</h1>
                <h2 className='text-3xl flex flex-col justify-center items-center'>Computer Science student at York Univserity
                    <motion.hr
                            className='h-1'
                            initial={{ width: 0 }}
                            whileInView={{ width: "105%" }}
                            viewport={{ once: true, amount: 0.5 }}
                            exit={{ width: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }} />
                </h2>
                <div className='h-14'/>
                <motion.h2 className='text-2xl w-150 text-center'
                initial={{scale: 0}}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1 }}
                >Check out my personal portfolio with my projects, info, and more</motion.h2>

                <div className='flex flex-row mt-10'>
                    <motion.h2 
                    initial={{scale: 0}}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.2 }}
                    className='underline text-lg m-2.5 cursor-pointer'
                        ><a
                            href="/Luca Mazzotta, Computer Science - Resume.pdf"
                            download
                        >Resume.pdf</a></motion.h2>
                    <a href='https://www.linkedin.com/in/luca-j-mazzotta/' target="_blank"><motion.h2 
                    initial={{scale: 0}}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.3 }}
                    className='underline text-lg m-2.5 cursor-pointer'
                    >LinkedIn</motion.h2></a>
                    <a href='https://github.com/LucaJMazz' target="_blank"><motion.h2 
                    initial={{scale: 0}}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.4 }}
                    className='underline text-lg m-2.5 cursor-pointer'
                    >Github</motion.h2></a>
                </div>

            </div>
            <LinePattern className={'side-pattern'}/>
        </div>
        </>
    )
}

export default Landing