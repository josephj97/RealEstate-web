import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="hero-container paddings innerWidth flexCenter">

                {/* right section */}
                <div className="hero-right">
                    <div className="image-container">
                        <img src="./public/hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero