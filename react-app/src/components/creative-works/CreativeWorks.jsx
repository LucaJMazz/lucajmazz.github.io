import './CreativeWorks.css'
import { useState } from 'react'
import Reveal from '../Reveal.jsx'
import t1 from '../../assets/trip/t1.webp'
import t2 from '../../assets/trip/t2.webp'
import t3 from '../../assets/trip/t3.webp'

import p1 from '../../assets/Posters/vader.webp'
import p2 from '../../assets/Posters/invinciblePoster.webp'
import p3 from '../../assets/Posters/jotaroStarPlatinumLQ.webp'
import p4 from '../../assets/Posters/lich.webp'
import p5 from '../../assets/Posters/MilesMorales.webp'
import p6 from '../../assets/Posters/DIo2.webp'

import b1 from '../../assets/blender/untitled.webp'
import b2 from '../../assets/blender/IMG_1689.webp'
import b3 from '../../assets/blender/PopFigureIphone1.webp'
import b4 from '../../assets/blender/TVpfp.webp'

const works = [
    {
        name: 'Triptych, Gallery 1313',
        date: 'May 2023',
        images: [t1, t2, t3],
        points: [
            'Triptych acrylic painting exhibited at Gallery 1313 during the May–June 2023 group exhibition',
            'Displayed in a professional gallery setting alongside works by other artists',
            'Composed of three interconnected, fictional video game environments rendered in a 3D-inspired style',
            'Uses game-like worlds to reflect the monotony and “zombie-like” repetition of committing to a single lifelong job',
            'Explores themes of routine, progression, and the tension between perceived choice and lived reality',
        ],
    },
    {
        name: 'Posters, York University Art Market',
        date: 'November 2024',
        images: [p1, p2, p3, p4, p5, p6],
        points: [
            'Series of digitally illustrated posters created using Photoshop',
            'Designed with a focus on bold composition, color, and graphic impact',
            'Printed and sold at the York University Art Market in November 2024',
            'Independently ran a personal booth, handling display, pricing, and sales',
            'Provided hands-on experience with presenting, marketing, and selling original artwork in a public setting',
        ],
    },
    {
        name: 'Various 3D Models, (Blender, Substance Painter, Z-Brush)',
        date: '2023 - 2025',
        images: [b1, b2, b3, b4],
        points: [
            'Collection of 3D models created using Blender, ZBrush, and Substance Painter',
            'Focused on clean topology, efficient geometry, and optimized assets for real-time use',
            'Experience with modeling, texturing, UV unwrapping, and material workflows',
            'Explores both stylized and semi-realistic forms, emphasizing readability and structure',
            'Demonstrates iterative design, technical problem-solving, and attention to detail in 3D pipelines',
        ],
    },
];

function CreativeWorks() {
    return (
        <section className='creative-works-container'>
            <header className='creative-works-header'>
                <div className='title'>
                    <p>[</p> <h1>Creative works</h1> <p>]</p>
                </div>
                <div className='creative-works-subtitle-group'>
                    <p className='creative-works-subtitle jetbrains-mono'>Click an image to view it full size</p>
                    <Reveal as='hr' className='creative-works-rule' amount={0} delay={100} />
                </div>
            </header>
            <div className='creative-works-grid'>
                {works.map((work) => (
                    <Artwork key={work.name} {...work} />
                ))}
            </div>
        </section>
    );
}

function Artwork({ name, date, images, points }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const currentImage = images[currentIndex];

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <>
        <article className='artwork-card'>
            <div className='artwork-media'>
                <button
                    type='button'
                    className='artwork-image-button'
                    onClick={() => setZoomed(true)}
                    aria-label={`View ${name} image ${currentIndex + 1} full size`}
                >
                    <img
                        src={currentImage}
                        alt={`${name} artwork ${currentIndex + 1}`}
                        width={1000}
                        height={1000}
                        loading="lazy"
                        decoding="async"
                    />
                </button>
                <button
                    type='button'
                    className='artwork-arrow artwork-arrow-prev'
                    onClick={prevImage}
                    aria-label='Previous image'
                >
                    ‹
                </button>
                <button
                    type='button'
                    className='artwork-arrow artwork-arrow-next'
                    onClick={nextImage}
                    aria-label='Next image'
                >
                    ›
                </button>
                <span className='artwork-date jetbrains-mono'>{date}</span>
                <span className='artwork-count jetbrains-mono'>{currentIndex + 1} / {images.length}</span>
            </div>
            <div className='artwork-content'>
                <h2 className='jetbrains-mono'>{name}</h2>
                <ul className='artwork-points jetbrains-mono'>
                    {points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
        {zoomed && (
            <div
                className='blur-bg'
                onClick={() => setZoomed(false)}
                role='dialog'
                aria-modal='true'
                aria-label={`${name} full size image`}
            >
                <img
                    src={currentImage}
                    alt={`${name} artwork ${currentIndex + 1}`}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        )}
        </>
    );
}

export default CreativeWorks;
