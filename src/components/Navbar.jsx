import logo from "../assets/logo.svg"
import { pageLinks, socialLinks } from "../data"

const Navbar = () => {

  const toggleLinks = () => {
    const links = document.querySelector(".nav-links")
    links.classList.toggle("show-links")
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" onClick={toggleLinks}>
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar