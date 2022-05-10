import Loader from 'react-loaders'
import './works.scss'
import stars from '../../assets/videos/stars.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Works = () => {
  return (
    <>
      <div className="container works-page">
        <div className="video-stars">
          <video autoPlay muted playsInline>
            <source src={stars} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="works">
          <div className="top-row">
            <div className="flip">
              <div className="front hookrod"></div>
              <div className="back hookrod2">
                <h2>Hook&Rod Fishing App</h2>
                <h3>#Under Development</h3>
                <p>
                  Fishing site reservation app. Project being built with 2 other
                  developers. We are pushing new code weekly. Investor search to
                  begin in Q3. Currently awaiting backend integration. I am
                  responsible for coding the design and responsiveness of all
                  pages and routes.
                </p>
                <h3>
                  To test the app, input "Stalowa Wola" as city, choose any
                  distance and any dates. Allow few seconds to load fishing
                  sites from the backend.
                </h3>
                <h3>
                  Tech stack: React, Gatsby, Java, Styled Components, Axios
                </h3>
                <div className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://nifty-tereshkova-42fd30.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLink} color="#bdbdbd" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flip">
              <div className="front tattle"></div>
              <div className="back tattle2">
                <h2>Tattle Chat App</h2>
                <h3>#Solo Project</h3>
                <p>
                  Functionalities include channel creation, direct messages,
                  replies, GIFs, image sharing etc. The code was sold for a
                  crypto trading group. Netlify link is a direct copy - the app
                  is hosted on a private address and is to be used with
                  TOR&#128272;.
                </p>
                <h3>
                  Tech stack: React, ExpressJS, Stream-Chat-React, Axios, Heroku
                </h3>
                <div className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://tattlechat.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLink} color="#bdbdbd" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/MichalKunicki/tattle-chat-app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} color="#bdbdbd" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-row">
            <div className="flip">
              <div className="front aerial"></div>
              <div className="back aerial2">
                <h2>Aerial Dreams Blog</h2>
                <h3>#Solo Project</h3>
                <p>
                  This project is a study on server-side rendering and content
                  management. The blog updates data live from GraphCMS where the
                  blog owner can add and edit posts, featured posts, accept
                  comments and more.
                </p>
                <h3>Tech stack: NextJS, TailwindCSS, GraphQL, Bootstrap</h3>
                <div className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://aerial-dreams.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLink} color="#bdbdbd" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/MichalKunicki/aerial_dreams_blog"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} color="#bdbdbd" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flip">
              <div className="front strefa"></div>
              <div className="back strefa2">
                <h2>Strefa Urody</h2>
                <h3>#Landing Page</h3>
                <p>
                  One of my earlier projects to showcase my skill
                  progression&#128202;. This website was created for a local
                  cosmetology salon. On request custom design from the salon
                  owner. Project built using simple tools for a business with a
                  lower budget. Full responsiveness.
                </p>
                <h3>Tech stack: HTML, CSS, Bootstrap, JQuery</h3>
                <div className="socials">
                  <ul>
                    <li>
                      <a
                        href="https://strefaurodybialystok.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLink} color="#bdbdbd" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/MichalKunicki/strefa_urody_webpage"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} color="#bdbdbd" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Works
