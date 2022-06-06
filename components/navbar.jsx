import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-around align-center min-h-[8vh] bg-[#f8fafc]'>
            <div className='tracking-widest'>
                <h4 className=''>CustomKBs</h4>
            </div>
            <ul>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>KEYBOARD KITS</a></li>
                <li><a href='#'>SWITCHES</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;