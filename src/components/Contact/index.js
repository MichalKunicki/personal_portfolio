import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './contact.scss'
import Matrix from './Matrix/index.js'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am currently applying for mid-positions specifically as a React
            front end developer - with an emphasis on web3 projects or
            innovative technology. I am looking for a long-term commitment
            &#x28;2 years +&#x29;. If my portfolio website and projects sparked
            some interest, drop me an e-mail or contact me via
            Skype/Linkedin!&#x1F47D;
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input placeholder="Name" type="text" name="name" required />
              <input placeholder="Email" type="email" name="email" required />
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <input type="submit" className="flat-button" value="SEND" />
              {/* <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul> */}
            </form>
          </div>
        </div>
        <Matrix />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
