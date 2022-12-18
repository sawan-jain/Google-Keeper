import React from 'react';

let year = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>copyright &copy; {year}</p>
    </footer>
}

export default Footer;