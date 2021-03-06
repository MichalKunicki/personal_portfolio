import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import cpu from '../../assets/images/cpu.svg'
import box from '../../assets/images/box.svg'
import user from '../../assets/images/user.svg'
import tool from '../../assets/images/tool.svg'
import mail from '../../assets/images/mail.svg'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link exact="true" activeclassname="active" to="/">
        <div className="logo">
          <h1>M. Kunicki</h1>
        </div>
      </Link>
      <div>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <img alt="home" src={cpu}></img>
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <img alt="about" src={user}></img>
          </NavLink>
          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <img alt="about" src={tool}></img>
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/works"
          >
            <img alt="about" src={box}></img>
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <img alt="contact" src={mail}></img>
          </NavLink>
        </nav>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a
              href="https://linkedin.com/in/michal-kunicki"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#bdbdbd" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MichalKunicki"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#bdbdbd" />
            </a>
          </li>
          <li>
            <a
              href="skype:live:michalkunicki96"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSkype} color="#bdbdbd" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
