import './AboutMe.css'
import yorkLogo from '../../assets/york-u-logo.webp';
import variHallCard from '../../assets/education/vari-hall-card.webp';
import mayfieldSchool from '../../assets/mayfieldss.webp';
import secondLassonde from '../../assets/second-lassonde.webp';
import idImage from '../../assets/id-image.webp';
import suitImg from '../../assets/suit.webp'
import { useRef } from 'react';
import LinePattern from '../patterns/LinePattern';
import PatternDivider from '../dividers/PatternDivider'
import Reveal from '../Reveal';
import { useTilt } from '../../hooks/useTilt';
import { LuAppWindow } from "react-icons/lu";
import { HiPaintBrush } from "react-icons/hi2";
import { FaLaptopCode, FaGraduationCap, FaUsers } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { VscSparkleFilled } from "react-icons/vsc";

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
        items: ['Git', 'GitHub', 'Docker', 'VS Code', 'IntelliJ IDE', 'Eclipse', 'Visual Studio', 'Postman', 'Figma', 'Microsoft Azure', 'Netlify', 'Render', 'Cloudflare', 'Oracle Cloud Infrastructure'],
    },
    {
        title: 'AI Tools',
        icon: VscSparkleFilled,
        items: [ 'Claude Code', 'Opencode', 'Ollama', 'Local LLMs (Hermes agent)', 'Claude API', 'Apple Foundation Models', 'MCP',
'Github copilot', 'agentic workflows', 'AI endpoints in projects'],
    },
];

// Vari Hall photo: Andrei Sedoff, CC BY 3.0, via Wikimedia Commons.
const educationCards = [
    {
        title: 'Visual Arts, Regional Arts Program',
        school: 'Mayfield S.S',
        years: '2019–2023',
        href: 'https://www.mayfieldarts.com/visualarts',
        linkTitle: 'Visit Mayfield VA RAP page',
        image: mayfieldSchool,
        imageAlt: 'Mayfield Secondary School building',
        imagePosition: 'center 55%',
        points: [
            'Foundations in visual art techniques and media (drawing, painting, sculpture)',
            'Creative problem solving and conceptual development',
            'Portfolio creation & artistic voice development',
            'Visual communication and design principles',
            'Critical reflection, analysis, and art research skills',
        ],
    },
    {
        title: 'Digital Media Program',
        school: 'York University',
        years: '2023–2024',
        href: 'https://ampd.yorku.ca/department-of-computational-arts/digital-media/',
        linkTitle: 'Visit York U Digital Media page',
        image: variHallCard,
        imageAlt: 'Vari Hall on the York University Keele campus',
        imagePosition: 'center 55%',
        credit: 'Photo: Andrei Sedoff · CC BY 3.0',
        points: [
            'UI / UX design principles & user-centered workflows',
            'Graphic design, branding, and visual systems',
            'Interactivity of computing and society',
            'Creative problem-solving & design iteration',
            'Collaboration on interdisciplinary creative projects',
        ],
    },
    {
        title: 'B.Sc. Specialized Honours Computer Science',
        school: 'York University',
        years: 'Sept. 2024–Present',
        href: 'https://lassonde.yorku.ca/academics/computer-science',
        linkTitle: 'Visit Lassonde Computer Science page',
        image: secondLassonde,
        imageAlt: 'Second Lassonde building, the Bergeron Centre for Engineering Excellence, at York University',
        imagePosition: 'center 50%',
        points: [
            'Programming fundamentals (Java, JavaScript, Python)',
            'Data structures, algorithms, and problem solving',
            'Object-oriented design & software architecture',
            'Web development with modern frameworks (React)',
            'Mathematical foundations for computing',
        ],
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

            <div ref={summaryRef} className='summary-section'>
                <span className='summary-copy jetbrains-mono text-xl'>Hi, I'm Luca.
                        I'm a third-year Computer Science student at York University's Lassonde School of Engineering.
                        I build full-stack web apps and games using React, Java, and Spring Boot.
                        I also work as a math tutor, which has taught me how to explain complex ideas clearly and debug problems step by step.
                        I'm looking for software development co-op and internship opportunities.
                </span>
                <div className='portrait-before shrink-0  m-5'>
                    <div className='portrait shrink-0 flex flex-col justify-center items-center'>
                        <div className='portrait-photo-frame'>
                            <img className='object-center object-cover' src={suitImg} alt="Professional headshot of Luca Mazzotta in a suit" width={560} height={560} loading="lazy" decoding="async" />
                        </div>
                        <div className='portrait-copy'>
                            <p className='portrait-name jetbrains-mono'>Luca Mazzotta</p>
                            <p className='portrait-role jetbrains-mono'>B.Sc. Computer Science</p>
                        </div>
                    </div>
                </div>
            </div>

            <LinePattern className={'pattern-bg'}>
            <div ref={educationRef} className='education-intro'>
                <div className='education-copy text-box text-xl jetbrains-mono'>
                    <h2 className='text-3xl jetbrains-mono mb-3'> 
                        Education
                        <Reveal as='hr' className='h-1 reveal-line' amount={0} />
                    </h2>
                    I'm a third-year Computer Science student at York University's Lassonde School of Engineering, pursuing a B.Sc., Specialized Honours in Computer Science (Sept. 2023 to present).
                    <br/><br/>
                    <b>Relevant coursework:</b> Theory of Computation, Computer Organization, Advanced Object-Oriented Programming, Discrete Math, Applied Linear Algebra, Fundamentals of Data Structures, Introduction to AI and Logic Programming, Operating System Fundamentals.
                </div>
            <div className='id-card-slot'><IdCard /></div>
            </div>
            </LinePattern>

            <div className='eduboxes'>
                <div className='education-grid'>
                    {educationCards.map((card) => (
                        <EducationCard key={card.title} card={card} />
                    ))}
                </div>
            </div>

            <PatternDivider />

            <div ref={experienceRef} className='flex flex-col justify-center items-center mt-5 mb-10'>
                <div className='title'>
                    <p>[</p> <h2>Experience</h2> <p>]</p>
                </div>
                <div className='subtitle-group'>
                    <p className="jetbrains-mono subtitle">Where I've worked and what I've done.</p>
                    <Reveal as='hr' className='h-1 mt-2 mb-5 subtitle reveal-line' amount={0} delay={100} />
                </div>
                <div className='experience-grid'>
                <div className='skill-box'>
                    <div className='flex flex-row justify-start items-center m-0'>
                        <FaGraduationCap className='skill-box-icon mx-5 text-3xl' aria-hidden='true'/>
                        <h3 className='jetbrains-mono text-2xl font-extrabold'>Advanced Math Tutor</h3>
                    </div>
                    <hr className='h-0.5 mt-2'/>
                    <p className='jetbrains-mono text-sm text-gray-300 mt-4 mb-3'>Scholars Education, Bolton, ON</p>
                    <span className='skill-chip jetbrains-mono'>Nov. 2024 – Present</span>
                    <ul className="jetbrains-mono list-disc ml-8 mt-4 space-y-2 text-gray-300">
                            <li>Tutored 40+ students in Grades 1–12 in one-on-one and small-group sessions, breaking down complex concepts into clear, step-by-step explanations</li>
                            <li>Diagnosed gaps in understanding and adjusted lesson plans on the spot, helping my students raise their math grades by an average of 15%</li>
                            <li>Tracked progress across sessions and changed teaching methods based on results, improving quiz/test scores by 10% on average</li>
                            <li>Communicated technical and abstract material to non-technical audiences (students and parents), translating complex ideas into accessible language</li>
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
                            <li>Supervised and led daily programming for 20+ campers, planning and facilitating hands-on activities while adapting quickly to the needs of a diverse group</li>
                            <li>Coordinated with staff and supervisors to organize materials and logistics for 5+ daily activities, maintaining safety protocols and smooth operations</li>
                            <li>Adhered to all safety protocols during daily activities and camper situtations</li>
                    </ul>
                </div>
                </div>
            </div>

            <PatternDivider />

            <div ref={skillsRef} className='flex flex-col justify-center items-center mt-5'>
                <div className='title'>
                    <p>[</p> <h2>Skills</h2> <p>]</p>
                </div>
                <div className='subtitle-group'>
                    <p className="jetbrains-mono subtitle">Languages, frameworks, libraries, and developer tools I use.</p>
                    <Reveal as='hr' className='h-1 mt-2 mb-5 subtitle reveal-line' amount={0} delay={100} />
                </div>
                <div className='skills-grid'>
                {skillGroups.map((group, index) => {
                    const Icon = group.icon;
                    return (
                    <section key={group.title} className='skill-box skill-category-card'>
                        <div className='skill-card-heading'>
                            <div className='skill-card-heading-main'>
                                <span className='skill-icon-frame'>
                                    <Icon className='skill-box-icon' aria-hidden='true'/>
                                </span>
                                <div className='skill-card-title-wrap'>
                                    <span className='skill-card-kicker jetbrains-mono'>CATEGORY {String(index + 1).padStart(2, '0')}</span>
                                    <h3 className='jetbrains-mono'>{group.title}</h3>
                                </div>
                            </div>
                            <span className='skill-count jetbrains-mono'>
                                {String(group.items.length).padStart(2, '0')} <span>skills</span>
                            </span>
                        </div>
                        <div className='skill-card-rule' aria-hidden='true'><span /></div>
                        <ul role='list' className='skill-chips'>
                                {group.items.map((item) => (
                                    <li key={item} className='skill-chip jetbrains-mono'>{item}</li>
                                ))}
                        </ul>
                    </section>
                    );
                })}
                </div>
            </div>
        </div>
    );
}

function EducationCard({ card }) {
    const tilt = useTilt({ max: 8 });

    return (
        <a
            className='education-card-link'
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            title={card.linkTitle}
        >
            <article
                ref={tilt.ref}
                className='education-card'
                onMouseMove={tilt.onMouseMove}
                onMouseLeave={tilt.onMouseLeave}
            >
                <div className='education-card-media'>
                    <img
                        src={card.image}
                        alt={card.imageAlt}
                        style={{ objectPosition: card.imagePosition }}
                        loading="lazy"
                        decoding="async"
                    />
                    <span className='education-card-years'>{card.years}</span>
                    {card.credit && (
                        <span className='education-card-credit' title='Photo by Andrei Sedoff, CC BY 3.0 — https://creativecommons.org/licenses/by/3.0/'>
                            {card.credit}
                        </span>
                    )}
                </div>
                <div className='education-card-body'>
                    <h3 className='jetbrains-mono'>{card.title}</h3>
                    <p className='education-card-school jetbrains-mono'>{card.school}</p>
                    <ul className='education-card-points'>
                        {card.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                    <span className='education-card-cta jetbrains-mono'>
                        View program <span aria-hidden='true'>↗</span>
                    </span>
                </div>
                <span className='education-card-glare' aria-hidden='true' />
            </article>
        </a>
    );
}

function IdCard() {
    // Pointer-driven tilt + parallax. All values are written as CSS
    // custom properties, so mouse movement never re-renders React.
    const tilt = useTilt({
        max: 18,
        clamp: 0.5,
        onMove: ({ element, x, y }) => {
            element.style.setProperty('--card-parallax-x', `${(-x * 18).toFixed(2)}px`);
            element.style.setProperty('--card-parallax-y', `${(-y * 14).toFixed(2)}px`);
            element.style.setProperty('--card-glow-opacity', '1');
        },
        onLeave: (element) => {
            element.style.setProperty('--card-parallax-x', '0px');
            element.style.setProperty('--card-parallax-y', '0px');
            element.style.setProperty('--card-glow-opacity', '0');
        },
    });

    return (
        <a href='https://www.yorku.ca' target="_blank" rel="noopener noreferrer"><div
            ref={tilt.ref}
            title="Visit York University"
            className='card shrink-0'
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
        >
            {/* Card thickness/edge */}
            <div className='card-edge' />
            <div className='building-strip'>
                <img className='building-bar' src={variHallCard} alt="Vari Hall on the York University campus" width={1400} height={573} loading="lazy" decoding="async" />
            </div>
            <div className='card-holo' aria-hidden='true' />
            <img className='york-logo' src={yorkLogo} alt="York University logo representing Lassonde School of Engineering" loading="lazy" decoding="async" />
            <div className='photo-mask'><img className='id-photo' src={idImage} alt="Luca Mazzotta University ID card photo" width={700} height={930} loading="lazy" decoding="async" /></div>
            <span>
                <p className='font-extrabold'>Luca Mazzotta</p>
                <p>B.Sc. Computer Science</p>
            </span>
            <div className='card-glow' aria-hidden='true' />
            <div className='card-sheen' aria-hidden='true' />
        </div></a>
    )
}

export default AboutMe;
