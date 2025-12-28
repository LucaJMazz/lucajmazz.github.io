import { useState } from 'react';
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom";
import './Navbar.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

function Navbar() {
    const [selected, setSelected] = useState(0);
    const menuItems = ['Home', 'About Me', 'Experience', 'Projects', 'Creative Works'];
    const navigate = useNavigate();

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

        navigate("/"+menuItems[val].toLowerCase().replace(' ', '-'));
    }

    return (
        <div className='navbar-container'>
            <div className="bar">
                <button><HiMenu className='menu'/></button>

                <span className='item-holder'>
                <FaChevronLeft className='chevron' onClick={() => chevronHandle(-1)}/>
                {
                    menuItems.map((item, index) => {
                        return <Item key={index} index={index} 
                                text={item} setSelected={setSelected} 
                                selected={selected}/>
                    })
                }
                <FaChevronRight className='chevron' onClick={() => chevronHandle(1)}/>
                </span>

                <button className='rounded-yellow'>Contact</button>
            </div>
        </div>
    )
}

function SelectedNode() {
    return (
        <motion.div layoutId="pill" className="pill" />
    );
}

function Item({ text, selected = false, setSelected, index }) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>{
            setSelected(index);
            navigate("/"+text.toLowerCase().replace(' ', '-'));
        }} className={`item ${(selected == index) ? 'selected' : ''}`}
        id={`item-${index}`} >
            <p>{text}</p>
            {selected === index && (
                <SelectedNode />
            )}    
        </div>
    );
}

export default Navbar;