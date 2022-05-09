import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './contact.scss'
import Matrix from './Matrix/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const successMsg = () => toast.success('Message successfully sent!')
  const errorMsg = () =>
    toast.error('Failed to send the message, please try again.')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_7sr5l1j',
        'template_ul5za4l',
        form.current,
        'Dm7pDSriJu2ctv-qQ'
      )
      .then(
        () => {
          successMsg()
        },
        () => {
          errorMsg()
        }
      )
    form.current.reset()
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="large-h1">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="small-h1">
            <h1>Contact me</h1>
          </div>
          <p>
            I am currently applying for mid-positions specifically as a React
            front end developer - with an emphasis on web3 projects or
            innovative technology. I am looking for a long-term commitment
            &#x28;2 years +&#x29;. If my portfolio website and projects sparked
            some interest, drop me an e-mail or contact me via
            Skype/Linkedin!&#x1F47D;
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail} name="contact" ref={form} method="post">
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
            </form>
            <div className="created-with">
              <h3>Website created with React & ThreeJS.</h3>
              <div className="icon">
                <a
                  href="https://github.com/MichalKunicki/personal_portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} color="#bdbdbd" />
                </a>
              </div>
            </div>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
        <Matrix />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
