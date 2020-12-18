import React from 'react'
import Button from './Button'
import './HeroSection.css'
import Logo from './image/logo.png'
import Notif from './Notif'

const HeroSection = () => {
    return (
        <>
            <Notif/>
            <div className="hero__container">
                <div className="hero__logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="hero__overlay">
                    <div className="hero__text">
                        <h1>Hello! I'm Budi Agung</h1>
                        <h2>Consult, Design, and Develop Websites</h2>
                        <p>Have something great in mind? Feel free to contact me.</p>
                        <p>I'll help you to make it happen.</p>
                    </div>

                    <Button/>  
                </div>
            </div>
        </>
    )
}

export default HeroSection
