import React from 'react'
import "../index.css"

const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
        <div>
            <footer className='footer'>Samat With Code © {currYear}</footer>
        </div>
    )
}

export default Footer
