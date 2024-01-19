import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="./public/logo.png" alt="logo" width="100"/>
        <div className="flexCenter h-menu">
          <a href="" className="">Redencies</a>
          <a href="" className="">Our Value</a>
          <a href="" className="">Contact Us</a>
          <a href="" className="">Get Started</a>
          <button className='button'>
            <a href="" className="">Contact</a>
          </button>

        </div>
      </div>
    </section>
  )
}

export default Header