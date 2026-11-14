import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaUser, FaPaintBrush, FaBars, FaTimes } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import iconImg from '../../assets/iconEmpty.png';
import './Navbar.css'

const locationIndex = {'/home': 0, '/about-me':1, '/projects':2, '/creative-works':3};

function Navbar() {
    const [selected, setSelected] = useState(0);
    const [menuState, setMenuState] = useState('closed');
    const menuOpen = menuState === 'open' || menuState === 'opening';

    const itemHolderRef = useRef(null);
    const pillRef = useRef(null);

    const menuItems = [
        ['Home', <FaHouse />], 
        ['About Me', <FaUser />], 
        ['Projects', <GoFileDirectoryFill />], 
        ['Creative Works', <FaPaintBrush />]
    ];
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname == '/') {
            setSelected(0);
        }
        else setSelected(locationIndex[location.pathname]);
    },[location])

    const toggleMenu = useCallback(() => {
        setMenuState((state) => {
            if (state === 'closed') return 'opening';
            if (state === 'closing') return 'open';
            return 'closing';
        });
    }, []);

    const closeMenu = useCallback(() => {
        setMenuState((state) => (state === 'open' || state === 'opening' ? 'closing' : state));
    }, []);

    // Start the enter transition only after the menu has been mounted in
    // its hidden state, so the CSS transition actually runs.
    useEffect(() => {
        if (menuState !== 'opening') return undefined;

        let innerFrame;
        const frame = requestAnimationFrame(() => {
            innerFrame = requestAnimationFrame(() => {
                setMenuState((state) => (state === 'opening' ? 'open' : state));
            });
        });

        return () => {
            cancelAnimationFrame(frame);
            if (innerFrame) cancelAnimationFrame(innerFrame);
        };
    }, [menuState]);

    // Unmount the mobile menu once its CSS exit transition (or the
    // timeout fallback below) finishes.
    const handleMenuTransitionEnd = useCallback((event) => {
        if (event.target !== event.currentTarget || event.propertyName !== 'opacity') return;
        setMenuState((state) => (state === 'closing' ? 'closed' : state));
    }, []);

    useEffect(() => {
        if (menuState !== 'closing') return undefined;
        const timeout = setTimeout(() => {
            setMenuState((state) => (state === 'closing' ? 'closed' : state));
        }, 250);
        return () => clearTimeout(timeout);
    }, [menuState]);

    function chevronHandle(direction) {
        let val = selected + direction;

        if (val >= 0 && val < menuItems.length) {
            setSelected(val);
        }
        else if (selected == menuItems.length-1 && direction == 1) {
            val = 0;
            setSelected(val);
        }
        else if (selected == 0 && direction == -1) {
            val = menuItems.length-1;
            setSelected(val);
        }

        navigate("/"+menuItems[val][0].toLowerCase().replace(' ', '-'));
    }

    // Regular CSS-driven replacement for framer-motion's layoutId pill:
    // measure the selected item and move/resize a single absolutely
    // positioned pill with a CSS transition.
    const updatePill = useCallback(() => {
        const holder = itemHolderRef.current;
        const pill = pillRef.current;
        if (!holder || !pill) return;

        const item = holder.querySelector('.item.selected');
        if (!item) {
            pill.style.opacity = '0';
            return;
        }

        const holderRect = holder.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        // The holder is display:none on mobile, so there's nothing to
        // measure until we're back on the desktop layout.
        if (!itemRect.width || !itemRect.height) {
            pill.style.opacity = '0';
            return;
        }

        pill.style.opacity = '1';
        pill.style.width = `${itemRect.width}px`;
        pill.style.height = `${itemRect.height}px`;
        pill.style.transform = `translate3d(${itemRect.left - holderRect.left}px, ${itemRect.top - holderRect.top}px, 0)`;
    }, []);

    useLayoutEffect(() => {
        updatePill();
    }, [selected, updatePill]);

    useEffect(() => {
        const holder = itemHolderRef.current;
        if (!holder) return undefined;

        // Only enable the transition after the first position has been
        // committed, so the pill doesn't animate in from the top-left.
        const frame = requestAnimationFrame(() => {
            if (pillRef.current) pillRef.current.dataset.ready = 'true';
        });

        const resizeObserver = new ResizeObserver(updatePill);
        resizeObserver.observe(holder);
        holder.querySelectorAll('.item').forEach((item) => resizeObserver.observe(item));

        window.addEventListener('resize', updatePill);
        let cancelled = false;
        if (document.fonts?.ready) {
            document.fonts.ready.then(() => {
                if (!cancelled) updatePill();
            }).catch(() => {});
        }

        return () => {
            cancelled = true;
            cancelAnimationFrame(frame);
            resizeObserver.disconnect();
            window.removeEventListener('resize', updatePill);
        };
    }, [updatePill]);

    return (
        <>
        <div className='navbar-container'>
            <div className="bar">
                <img className='menu' src={iconImg} alt='website icon' onClick={() => navigate("/home")}/>

                <button className='hamburger' onClick={toggleMenu} aria-label='Toggle menu'>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <span className='item-holder' ref={itemHolderRef}>
                <span className='pill' ref={pillRef} aria-hidden='true' />
                <FaChevronLeft className='chevron' onClick={() => chevronHandle(-1)}/>
                {
                    menuItems.map((item, index) => {
                        return <Item
                                    key={index}
                                    index={index}
                                    text={item[0]}
                                    icon={item[1]}
                                    setSelected={setSelected}
                                    selected={selected}
                                    onItemClick={closeMenu}
                                />
                    })
                }
                <FaChevronRight className='chevron' onClick={() => chevronHandle(1)}/>
                </span>

                <a href='mailto:lucajmazz@gmail.com' className='rounded-yellow'>
                    <IoIosMail className="icon"/>
                    Contact
                </a>
            </div>

            {menuState !== 'closed' && (
                <div
                    className={`mobile-menu${menuState === 'open' ? ' open' : ''}`}
                    onTransitionEnd={handleMenuTransitionEnd}
                >
                    <span className='mobile-menu-items'>
                    {
                        menuItems.map((item, index) => {
                            return <Item
                                        key={index}
                                        index={index}
                                        text={item[0]}
                                        icon={item[1]}
                                        setSelected={setSelected}
                                        selected={selected}
                                        onItemClick={closeMenu}
                                    />
                        })
                    }
                    </span>
                    <a href='mailto:lucajmazz@gmail.com' className='mobile-contact rounded-yellow'>
                        <IoIosMail className="icon"/>
                        Contact
                    </a>
                </div>
            )}
        </div>
        </>
    )
}

function Item({ text, icon, selected = false, setSelected, index, onItemClick }) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>{
            setSelected(index);
            navigate("/"+text.toLowerCase().replace(' ', '-'));
            if (onItemClick) onItemClick();
        }} className={`item ${(selected == index) ? 'selected' : ''}`}
        id={`item-${index}`} >
            <div>   
                {icon}
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Navbar;
