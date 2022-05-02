import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
        </Link>
      </div>
      <div>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MichalKunicki"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="skype:live:michalkunicki96"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
