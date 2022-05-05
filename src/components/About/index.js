import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
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
        <div className="video">
          <video autoPlay>
            <source src={cloud} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p></p>
          <p>
            I'm an ambitious front-end developer actively looking for a position
            in a start-up or an established company. For the past 18 months I've
            been programming full-time, constantly learning new technologies as
            well as freelancing at the same time. I'm mostly self-taught but I
            have a bit of academic computer-science knowledge after completing
            the Harvard's CS50 Course.
          </p>
          <p align="LEFT">
            I've been working remotely for the past 4 years and that is the work
            environment I strive in. All my life goals circle around the idea of
            remote work so I guess you wouldn't see me in an office. &#9969; My
            endgoal in programming is to join or create an innovative Web3
            project based on blockchain solutions.
          </p>
          <p>
            In my free time I'm a crypto investor, pianist and squash player. I
            am very dedicated to my schedule and I am confident that I would be
            a great addition to your team. This year, I hope to go to the next
            level with my programming skills under a watchful eye of a fantastic
            senior engineer/project leader.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
