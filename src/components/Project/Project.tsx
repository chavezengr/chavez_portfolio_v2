import { Container } from './styles'
import githubIcon from '../../assets/github.svg'
import externalLink from '../../assets/external-link.svg'
import ScrollAnimation from 'react-animate-on-scroll'

export function Project() {
  return (
    <Container id="project">
      <h2>Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/chavezengr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/chavezengr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>JMDCHealth - Personal Project</h3>
              <p>
                Developed a mobile application using React Native and ASP.NET
                Core API, a mobile application was crafted to enable online
                medicine purchases, virtual consultations, and clinic
                appointment scheduling.
              </p>
              <p>
                This project harmoniously blended React Native's frontend
                capabilities with ASP.NET Core API's backend functionalities and
                Microsoft SQL Server for database, offering users a centralized
                platform for streamlined healthcare interactions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li> <li>Asp.Net Core</li>
                <li>Microsof SQL Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/chavezengr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/chavezengr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>JMDCHealth - Personal Project</h3>
              <p>
                Developed a mobile application using React Native and ASP.NET
                Core API, a mobile application was crafted to enable online
                medicine purchases, virtual consultations, and clinic
                appointment scheduling.
              </p>
              <p>
                This project harmoniously blended React Native's frontend
                capabilities with ASP.NET Core API's backend functionalities and
                Microsoft SQL Server for database, offering users a centralized
                platform for streamlined healthcare interactions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li> <li>Asp.Net Core</li>
                <li>Microsof SQL Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/chavezengr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/chavezengr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>JMDCHealth - Personal Project</h3>
              <p>
                Developed a mobile application using React Native and ASP.NET
                Core API, a mobile application was crafted to enable online
                medicine purchases, virtual consultations, and clinic
                appointment scheduling.
              </p>
              <p>
                This project harmoniously blended React Native's frontend
                capabilities with ASP.NET Core API's backend functionalities and
                Microsoft SQL Server for database, offering users a centralized
                platform for streamlined healthcare interactions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li> <li>Asp.Net Core</li>
                <li>Microsof SQL Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
