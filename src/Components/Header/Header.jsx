import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened && "4rem" }
    }
  }
  const handleMenuOpened = () => {
    setMenuOpened((prev) => !prev);
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" width="100" />

        <OutsideClickHandler

          onOutsideClick={() => {
            setMenuOpened(false)
          }}
        >
          <>
            <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
              <a href="" className="">Residencies</a>
              <a href="" className="">Our Value</a>
              <a href="" className="">Contact Us</a>
              <a href="" className="">Get Started</a>
              <button className='button'>
                <a href="" className="">Contact</a>
              </button>

            </div>
            <div className="menu-icon" onClick={handleMenuOpened}>
              <BiMenuAltRight size={30} />
            </div>
          </>
        </OutsideClickHandler>


      </div>
    </section>
  )
}

export default Header