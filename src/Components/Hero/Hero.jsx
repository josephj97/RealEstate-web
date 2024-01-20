import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="hero-container paddings innerWidth flexCenter">

                {/* left section */}
                <div className="hero-left flexColStart">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>Discover <br />Most Suitable<br />Property</h1>
                    </div>
                    <div className="hero-des flexColStart">
                        <span>Find a variety of properties that suit you very easilty</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="search-bar flexCenter">
                        <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}></CountUp>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1900} end={2000} duration={4}></CountUp>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customer</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} duration={4}></CountUp>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Awards Winning</span>
                        </div>
                    </div>
                </div>

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