import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { navdata } from './navdata'
import { useState, useRef, useEffect } from 'react'
const Nav = () => {
  const [showLinks, setshowLinks] = useState(false)
  const [active, setActive] = useState(null)
  const navRef = useRef()
  const toggle = () => {
    setshowLinks(!showLinks)
  }
  const toggleClicked = (id) => {
    setshowLinks(false)
    setActive(id)
  }
  const clicked = (e) => {
    if (navRef && !navRef.current.contains(e.target)) {
      setshowLinks(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', clicked)
    return () => {
      document.removeEventListener('mousedown', clicked)
    }
  }, [])

  return (
    <nav ref={navRef}>
      <div className="navCenter">
        <div className="navHeader">
          <div className="logo">LOGO</div>
          <div className="toggle">
            <GiHamburgerMenu onClick={toggle} />
          </div>
        </div>
        <div className={`navLinks ${showLinks ? 'showLinks' : ''}`}>
          <div className="links">
            {navdata.map(({ id, url, text }) => {
              const activeId = id === active ? 'activeLink' : ''
              return (
                <li key={id}>
                  <Link
                    to={url}
                    className={`myLink ${activeId}`}
                    onClick={() => toggleClicked(id)}
                  >
                    {text}
                  </Link>
                </li>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav
