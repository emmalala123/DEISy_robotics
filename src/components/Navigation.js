import React from 'react';
import { NavButton } from '../elemnets/index.js';

const Navigation = () => {
    return (
        <div>
            <NavButton>// PEOPLE </NavButton>
            <NavButton>// NHRL </NavButton>
            <NavButton href="/About">// ABOUT </NavButton>
            <NavButton>// RESEARCH </NavButton>
        </div>
    );
};

export default Navigation;