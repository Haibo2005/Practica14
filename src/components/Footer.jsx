import { pageLinks, socialLinks } from "../data"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="section footer">

      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={item.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company{" "}
        <span>{year}</span> all rights reserved
      </p>

    </footer>
  )
}

export default Footer