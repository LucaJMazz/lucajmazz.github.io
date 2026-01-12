import './CreativeWorks.css'
import { useState } from 'react'
import LinePattern from '../patterns/LinePattern'
import { motion } from 'motion/react'
import t1 from '../../assets/trip/t1.jpeg'
import t2 from '../../assets/trip/t2.jpeg'
import t3 from '../../assets/trip/t3.jpeg'

import p1 from '../../assets/Posters/vader.PNG'
import p2 from '../../assets/Posters/invinciblePoster.PNG'
import p3 from '../../assets/Posters/jotaroStarPlatinumLQ.PNG'
import p4 from '../../assets/Posters/lich.PNG'
import p5 from '../../assets/Posters/MilesMorales.jpg'
import p6 from '../../assets/Posters/DIo2.JPG'

import b1 from '../../assets/blender/untitled.PNG'
import b2 from '../../assets/blender/IMG_1689.jpg'
import b3 from '../../assets/blender/PopFigureIphone1.jpg'
import b4 from '../../assets/blender/TVpfp.PNG'


function CreativeWorks() {
    return (
        <>
        <div className='flex flex-row justify-center items-center'>
        <div className='creative-works-container flex flex-col justify-center items-center shrink-0'>
            <div className='flex flex-col justify-center items-center m-2 mb-5 shrink-0'>
                <h1>Creative Works</h1>
                <p className='jetbrains-mono'>Hover and click on an image to see it in full scale</p>
                <hr className='h-1'/>
            </div>
            <Artwork name={'Triptych, Gallery 1313'} 
            imgs={[t1, t2, t3]} desc={'May 2023'} 
                span={
                    <>
                    <li>Triptych acrylic painting exhibited at Gallery 1313 during the May–June 2023 group exhibition</li>
                    <li>Displayed in a professional gallery setting alongside works by other artists</li>
                    <li>Composed of three interconnected, fictional video game environments rendered in a 3D-inspired style</li>
                    <li>Uses game-like worlds to reflect the monotony and “zombie-like” repetition of committing to a single lifelong job</li>
                    <li>Explores themes of routine, progression, and the tension between perceived choice and lived reality</li>
                    </>
                }/>

            <Artwork name={'Posters, York University Art Market'} 
            imgs={[p1, p2, p3, p4, p5, p6]} desc={'November 2024'} 
                span={
                    <>
                    <li>Series of digitally illustrated posters created using Photoshop</li>
                    <li>Designed with a focus on bold composition, color, and graphic impact</li>
                    <li>Printed and sold at the York University Art Market in November 2024</li>
                    <li>Independently ran a personal booth, handling display, pricing, and sales</li>
                    <li>Provided hands-on experience with presenting, marketing, and selling original artwork in a public setting</li>
                    </>
                }/>

            <Artwork name={'Various 3D Models, (Blender, Substance Painter, Z-Brush)'} 
            imgs={[b1, b2, b3, b4]} desc={'2023 - 2025'} 
                span={
                    <>
                    <li>Collection of 3D models created using Blender, ZBrush, and Substance Painter</li>
                    <li>Focused on clean topology, efficient geometry, and optimized assets for real-time use</li>
                    <li>Experience with modeling, texturing, UV unwrapping, and material workflows</li>
                    <li>Explores both stylized and semi-realistic forms, emphasizing readability and structure</li>
                    <li>Demonstrates iterative design, technical problem-solving, and attention to detail in 3D pipelines</li>
                    </>
                }/>
        </div>
        </div>
        </>
    );
}

function Artwork({ name, desc, span, imgs}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1))
    }

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1))
    }

    return (
        <>
        <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="artwork-pattern mb-10 rounded-xl overflow-hidden">
            <div className='artwork relative'>
                <div className='art-overlay' />
                <div className='art-accent' />
                <div className='art-meta glass-card'>
                    <h2 className='jetbrains-mono font-semibold text-lg'>{name}</h2>
                    <h3 className='jetbrains-mono text-xs text-gray-300 mt-0.5'>{desc}</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='image-holder'>
                        <img
                            onClick={() => {
                                setZoomed(true);
                            }}
                            className='cursor-zoom-in'
                            src={imgs[currentIndex]}
                            alt={`Artwork ${currentIndex + 1}`}
                        />
                    </div>

                    <div className='art-buttons flex flex-row gap-4 justify-center'>
                        <button
                            onClick={prevImage}
                            className='art-button jetbrains-mono px-3 py-1.5 border rounded text-sm'
                        >
                            Prev
                        </button>
                        <button
                            onClick={nextImage}
                            className='art-button jetbrains-mono px-3 py-1.5 border rounded text-sm'
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className='glass-card mt-3'>
                    <span className='jetbrains-mono'>
                        <ul className="list-disc ml-5 space-y-1 text-xs">
                            {span}
                        </ul>
                    </span>
                </div>
            </div>
        </motion.div>
        {zoomed && <div 
        className='blur-bg'
        onClick={() => setZoomed(false)}
        >
            <img 
                src={imgs[currentIndex]}
                alt={`Artwork ${currentIndex + 1}`}/>
        </div>}
        </>
    );
}

export default CreativeWorks;