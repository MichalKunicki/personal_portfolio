import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './home.scss'
import Cube from './Cube/index.js'
import poland from '../../assets/images/poland.svg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['M', 'i', 'c', 'h', 'a', 'e', 'l']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="large-h1">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>l</span>
            <span className={`${letterClass} _15`}>o,</span>
            <br />
            <span className={`${letterClass} _16`}>I</span>
            <span className={`${letterClass} _17`}>'m&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <div className="small-h1">
            <h1>
              <span>Hello,</span>
              <br></br>
              <span>I'm Michael</span>
              <br></br>
              <span>web developer.</span>
            </h1>
          </div>
          <h2>Front End React Developer</h2>
          <h2>Remote / Worldwide</h2>
          <div className="location">
            <div
              className="flag"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img alt="polish-flag" src={poland}></img>
            </div>
            {hovered && (
              <div>
                <h3>Current Location: Poland</h3>
              </div>
            )}
          </div>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Cube />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
