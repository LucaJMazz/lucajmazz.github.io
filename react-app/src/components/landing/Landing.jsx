import LinePattern from '../patterns/LinePattern.jsx'
import './Landing.css'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'

function Landing() {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setStartAnimation(true);
        }, 500)
    }, [])

    return (
        <>
        <div className='landing-container'>
            <LinePattern className={'side-pattern'}/>
            <div className='title-container flex flex-col justify-center items-center'>
                <h1>Luca Mazzotta</h1>
                <h2 className='text-3xl flex flex-col justify-center items-center'>Computer Science student at York Univserity
                    <AnimatePresence>
                            {startAnimation && <motion.hr initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                exit={{ width: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }} />}
                    </AnimatePresence>
                </h2>
                <div className='h-14'/>
                <h2 className='text-2xl w-150 text-center'>Check out my personal portfolio with my projects, info, and more</h2>
            </div>
            <LinePattern className={'side-pattern'}/>
        </div>
        </>
    )
}

export default Landing