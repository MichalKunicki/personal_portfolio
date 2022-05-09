import { useEffect, useState } from 'react'
import {
  faSass,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './skills.scss'
import nextLogo from '../../assets/images/nextjs.svg'
import gatsbyLogo from '../../assets/images/gatsby.svg'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            I specialize in React and its whole ecosystem. I work with framworks
            like NextJS or Gatsby on a daily basis. I am profficient in HTML and
            all the latest CSS standards like Sass, TailwindCSS, Styled
            Components etc. Most of my work is documented on Github. I try to
            push code daily and version control all of my code with Git.
          </p>
          <p align="LEFT">
            I enjoy design work and I believe I have a good feeling of
            aesthetics. I am happy to work directly with designers and back-end
            engineers to deliver a perfect product.
          </p>
          <p>
            Some of the miscellanous technologies and libraries I work with are:
            TypeScript, ThreeJS, GraphQL, GraphCMS, Axios, NodeJS, Git, Github,
            VSCode and more.
          </p>
          <p>
            I am open to learning new technologies required for your project. As
            always in programming, all that is needed is a bit of time and a
            stack of documentation to crunch through. &#x1F36A;
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img alt="next-logo" src={nextLogo} width="160"></img>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faSass} color="#d9438b" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <img alt="gatsby-logo" src={gatsbyLogo} width="110"></img>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
