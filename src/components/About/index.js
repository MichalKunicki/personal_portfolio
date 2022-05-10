import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './about.scss'
import cloud from '../../assets/videos/green-cloud.mp4'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="video-cloud">
          <video autoPlay muted playsInline>
            <source src={cloud} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-zone">
          <h1 className="large-h1">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="small-h1">
            <h1>About me</h1>
          </div>
          <p></p>
          <p>
            I'm a creative front-end developer actively looking for a position
            in a start-up or an established company. For the past 18 months I've
            been programming full-time, constantly learning new technologies as
            well as freelancing at the same time. I'm mostly self-taught but I
            have a bit of academic computer-science knowledge after completing
            Harvard's CS50 course.
          </p>
          <p align="LEFT">
            I've been working remotely for the past 4 years and that is the work
            environment I strive in. All my life goals circle around the idea of
            remote work so I guess you wouldn't meet me in an office. &#127796;
            My end goal in programming is to join or create an innovative web3
            project based on blockchain solutions.
          </p>
          <p>
            In my free time I'm a crypto investor, pianist and squash player. I
            am very dedicated to my work and schedule and I am confident that I
            would be a great addition to your team. This year, I hope to go to
            the next level with my programming skills under a watchful eye of a
            fantastic senior engineer/project leader.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
