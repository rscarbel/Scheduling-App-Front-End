import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen)
  }
  return <>
    <div className={isOpen ? 'open hamburger-container' : 'hamburger-container'} onClick={toggleMenu}><div className='hamburger-button'></div></div>
  </>
}

export default HamburgerMenu