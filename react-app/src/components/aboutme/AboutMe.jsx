import './AboutMe.css'
import yorkLogo from '../../assets/york-u-logo.webp';
import variHall from '../../assets/vari-hall.webp';
import idImage from '../../assets/id-image.webp';
import suitImg from '../../assets/suit.webp'
import { useRef } from 'react';
import LinePattern from '../patterns/LinePattern';
import PatternDivider from '../dividers/PatternDivider'
import Reveal from '../Reveal';
import { LuAppWindow } from "react-icons/lu";
import { HiPaintBrush } from "react-icons/hi2";
import { FaLaptopCode, FaGraduationCap, FaUsers } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";

const skillGroups = [
    {
        title: 'Languages',
        icon: FaLaptopCode,
        items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL', 'Swift', 'HTML/CSS'],
    },
    {
        title: 'Frameworks',
        icon: LuAppWindow,
        items: ['React', 'React Native', 'Node.js', 'Express.js', 'Spring Boot', 'Vite', 'Tailwind CSS'],
    },
    {
        title: 'Libraries',
        icon: IoIosGitBranch,
        items: ['Redux Toolkit', 'Framer Motion', 'JUnit', 'Firebase', 'MathQuill'],
    },
    {
        title: 'Developer Tools',
        icon: HiPaintBrush,
        items: ['Git', 'GitHub', 'Docker', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Visual Studio', 'Postman', 'Figma', 'Microsoft Azure', 'Netlify', 'Render', 'Cloudflare'],
    },
];

function AboutMe() {
    const summaryRef = useRef(null);
    const educationRef = useRef(null);
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);

    const scrollTo = (ref) => {
        if (ref.current) {
            const element = ref.current;
            const elementTop = element.getBoundingClientRect().top;
            const offset = window.innerHeight / 2 - element.offsetHeight / 2;
            window.scrollBy({ top: elementTop - offset, behavior: 'smooth' });
        }
    };

    return (
        <div className='about-me-container mb-40'>
            <div className='title'>
                <p>[</p> <h1>About Me</h1> <p>]</p>
            </div>
            <div className='flex flex-row justify-center items-center sections'>
                <p onClick={() => {scrollTo(summaryRef)}} className='mx-2 jetbrains-mono underline cursor-pointer'>Summary</p>
                <p onClick={() => {scrollTo(educationRef)}} className='mx-2 jetbrains-mono underline cursor-pointer'>Education</p>
                <p onClick={() => {scrollTo(experienceRef)}} className='mx-2 jetbrains-mono underline cursor-pointer'>Experience</p>
                <p onClick={() => {scrollTo(skillsRef)}} className='mx-2 jetbrains-mono underline cursor-pointer'>Skills</p>
            </div>

            <div ref={summaryRef} className='flex flex-row justify-center items-center mb-5 mx-50'>
                <span className='p-10 jetbrains-mono text-xl'>Hi, I'm Luca.
                        I'm a third-year Computer Science student at York University's Lassonde School of Engineering.
                        I build full-stack web apps and games using React, Java, and Spring Boot.
                        I also work as a math tutor, which has taught me how to explain complex ideas clearly and debug problems step by step.
                        I'm looking for software development co-op and internship opportunities.
                </span>
                <div className='portrait-before shrink-0  m-5'>
                    <div className='portrait shrink-0 flex flex-col justify-center items-center'>
                        <img className='object-center object-cover' src={suitImg} alt="Professional headshot of Luca Mazzotta in a suit" width={560} height={560} loading="lazy" decoding="async" style={{width: '280px', height: 'auto'}}></img>
                        <p className='mt-4 jetbrains-mono text-xl text-black'> Luca Mazzotta</p>
                    </div>
                </div>
            </div>

            <LinePattern className={'pattern-bg'}>
            <div ref={educationRef} className='px-60 py-20 flex flex-row justify-center items-center'>
                <div className='text-box text-xl jetbrains-mono'>
                    <h2 className='text-3xl jetbrains-mono mb-3'> 
                        Education
                        <Reveal as='hr' className='h-1 reveal-line' amount={0} />
                    </h2>
                    I'm a third-year Computer Science student at York University's Lassonde School of Engineering, pursuing a B.Sc., Specialized Honours in Computer Science (Sept. 2023 to present).
                    <br/><br/>
                    <b>Relevant coursework:</b> Theory of Computation, Computer Organization, Advanced Object-Oriented Programming, Discrete Math, Applied Linear Algebra, Fundamentals of Data Structures, Introduction to AI and Logic Programming, Operating System Fundamentals.
                </div>
            <div className='scale-130'><IdCard /></div>
            </div>
            </LinePattern>

            <div className='eduboxes flex flex-row justify-center align-middle'>
                <div className='flex flex-row justify-center align-middle'>
                <a href='https://www.mayfieldarts.com/visualarts' target="_blank" rel="noopener noreferrer"><div className='info-card my-20 m-5 p-5' 
                title='Visit Mayfield VA RAP page'>
                    <p className='jetbrains-mono font-extrabold mb-2 text-gray-900 text-2xl'>Visual Arts, Regional Arts Program</p>
                    <p className='text-gray-700 mb-2'>Mayfield S.S, 2019-2023</p>
                    <hr className='h-0.5'/>
                    <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-600">
                        <li>Foundations in visual art techniques and media (drawing, painting, sculpture)</li>
                        <li>Creative problem solving and conceptual development</li>
                        <li>Portfolio creation & artistic voice development</li>
                        <li>Visual communication and design principles</li>
                        <li>Critical reflection, analysis, and art research skills</li>
                    </ul>
                </div></a>
                <a href='https://ampd.yorku.ca/department-of-computational-arts/digital-media/' target="_blank" rel="noopener noreferrer"><div className='info-card my-20 m-5 p-5' 
                title='Visit York U Digital Media page'>
                    <p className='jetbrains-mono font-extrabold mb-2 text-gray-900 text-2xl'>Digital Media Program</p>
                    <p className='text-gray-700 mb-2'>York University, 2023-2024</p>
                    <hr className='h-0.5'/>
                    <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-600">
                        <li>UI / UX design principles & user-centered workflows</li>
                        <li>Graphic design, branding, and visual systems</li>
                        <li>Interactivity of computing and society</li>
                        <li>Creative problem-solving & design iteration</li>
                        <li>Collaboration on interdisciplinary creative projects</li>
                    </ul>
                </div></a>
                <a href='https://lassonde.yorku.ca/academics/computer-science' target="_blank" rel="noopener noreferrer"><div className='info-card my-20 m-5 p-5' 
                title='Visit Lassonde Computer Science page'>
                    <p className='jetbrains-mono font-extrabold mb-2 text-gray-900 text-2xl'>B.Sc. Specialized Honours Computer Science</p>
                    <p className='text-gray-700 mb-2'>York University, Sept. 2023–Present</p>
                    <hr className='h-0.5'/>
                    <ul className="list-disc ml-8 mt-4 space-y-2 text-gray-600">
                        <li>Programming fundamentals (Java, JavaScript, Python)</li>
                        <li>Data structures, algorithms, and problem solving</li>
                        <li>Object-oriented design & software architecture</li>
                        <li>Web development with modern frameworks (React)</li>
                        <li>Mathematical foundations for computing</li>
                    </ul>
                </div></a>
                </div>
            </div>

            <PatternDivider />

            <div ref={experienceRef} className='flex flex-col justify-center items-center mt-5 mb-10'>
                <div className='title'>
                    <p>[</p> <h2>Experience</h2> <p>]</p>
                </div>
                <p className="jetbrains-mono subtitle">Where I've worked and what I've done.</p>
                <hr className="h-1 mb-5 mt-2 subtitle"/>
                <div className='mt-8 grid grid-cols-2 gap-10'>
                <div className='skill-box'>
                    <div className='flex flex-row justify-start items-center m-0'>
                        <FaGraduationCap className='skill-box-icon mx-5 text-3xl' aria-hidden='true'/>
                        <h3 className='jetbrains-mono text-2xl font-extrabold'>Advanced Math Tutor</h3>
                    </div>
                    <hr className='h-0.5 mt-2'/>
                    <p className='jetbrains-mono text-sm text-gray-300 mt-4 mb-3'>Scholars Education, Bolton, ON</p>
                    <span className='skill-chip jetbrains-mono'>Nov. 2024 – Present</span>
                    <ul className="jetbrains-mono list-disc ml-8 mt-4 space-y-2 text-gray-300">
                            <li>One-on-one and small-group math and problem-solving instruction for 30+ students in Grades 1-12</li>
                            <li>Finds each student's knowledge gaps and fixes them with a step-by-step, debugging-style approach</li>
                            <li>Tracks progress and adjusts lessons based on results</li>
                            <li>Explains technical ideas in simple language to students and parents</li>
                    </ul>
                </div>
                <div className='skill-box'>
                    <div className='flex flex-row justify-start items-center m-0'>
                        <FaUsers className='skill-box-icon mx-5 text-3xl' aria-hidden='true'/>
                        <h3 className='jetbrains-mono text-2xl font-extrabold'>Camp Counsellor</h3>
                    </div>
                    <hr className='h-0.5 mt-2'/>
                    <p className='jetbrains-mono text-sm text-gray-300 mt-4 mb-3'>Town of Caledon, Bolton, ON</p>
                    <span className='skill-chip jetbrains-mono'>June 2025 – Aug. 2025</span>
                    <ul className="jetbrains-mono list-disc ml-8 mt-4 space-y-2 text-gray-300">
                            <li>Led daily programming for 20+ campers</li>
                            <li>Coordinated with staff on materials and logistics for 5+ daily activities</li>
                            <li>Followed safety protocols during all activities</li>
                    </ul>
                </div>
                </div>
            </div>

            <PatternDivider />

            <div ref={skillsRef} className='flex flex-col justify-center items-center mt-5'>
                <div className='title'>
                    <p>[</p> <h2>Skills</h2> <p>]</p>
                </div>
                <p className="jetbrains-mono subtitle">Languages, frameworks, libraries, and developer tools I use.</p>
                <hr className="h-1 mb-5 mt-2 subtitle"/>
                <div className='mt-8 grid grid-cols-2 gap-10'>
                {skillGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                    <div key={group.title} className='skill-box'>
                        <div className='flex flex-row justify-start items-center m-0'>
                            <Icon className='skill-box-icon mx-5 text-3xl' aria-hidden='true'/>
                            <h3 className='jetbrains-mono text-2xl font-extrabold'>{group.title}</h3>
                        </div>
                        <hr className='h-0.5 mt-2'/>
                        <ul role='list' className='skill-chips'>
                                {group.items.map((item) => (
                                    <li key={item} className='skill-chip jetbrains-mono'>{item}</li>
                                ))}
                        </ul>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
}

function IdCard() {

    // The original implementation used framer-motion values + springs for
    // this tilt. CSS custom properties + a CSS transition on the card give
    // the same smoothed tilt while keeping mouse moves off React's render path.
    const handleMouseMove = (event) => {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();

        const normalizedX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const normalizedY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

        // framer's useTransform clamps its input range to [-0.5, 0.5],
        // mapping to a maximum of +/-15deg.
        const clampedX = Math.max(-0.5, Math.min(0.5, normalizedX));
        const clampedY = Math.max(-0.5, Math.min(0.5, normalizedY));

        card.style.setProperty('--card-rotate-x', `${clampedY * 30}deg`);
        card.style.setProperty('--card-rotate-y', `${clampedX * -30}deg`);
        card.style.setProperty('--card-glow-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--card-glow-y', `${event.clientY - rect.top}px`);
        card.style.setProperty('--card-glow-opacity', '1');
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        card.style.setProperty('--card-rotate-x', '0deg');
        card.style.setProperty('--card-rotate-y', '0deg');
        card.style.setProperty('--card-glow-opacity', '0');
    };

    return (
        <a href='https://www.yorku.ca' target="_blank" rel="noopener noreferrer"><div
            title="Visit York University"
            className='card shrink-0 mx-4 md:mx-15'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
        >
            {/* Card thickness/edge */}
            <div className='card-edge' />
            <div className='card-glow' />
            <img className='york-logo' src={yorkLogo} alt="York University logo representing Lassonde School of Engineering" loading="lazy" decoding="async" />
            <img className='building-bar' src={variHall} alt="York University Vari Hall building campus photo" width={300} height={174} loading="lazy" decoding="async" />
            <div className='photo-mask'><img className='id-photo' src={idImage} alt="Luca Mazzotta University ID card photo" width={700} height={930} loading="lazy" decoding="async" style={{width: '100%', height: 'auto', maxWidth: '280px'}}/></div>
            <span>
                <p className='font-extrabold'>Luca Mazzotta</p>
                <p>B.Sc. Computer Science</p>
            </span>
        </div></a>
    )
}

export default AboutMe;