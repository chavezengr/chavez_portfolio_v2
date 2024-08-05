import { BrowserRouter } from 'react-router-dom'
import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import Joeram from '../../assets/joeram.svg'
import { NavHashLink } from 'react-router-hash-link'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import facebook from '../../assets/facebook-svgrepo-com.svg'
import viber from '../../assets/viber.svg'
import Logo from '../../assets/J.png'

export function Home() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp"></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>
            <a href="" target="_blank" rel="noreferrer">
              <img src={Logo} alt="telegram" />
            </a>
            oeram Chavez
          </h1>
          <br></br>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Application Systems Engineer | Software Developer </h3>
          <h3>| Software Automation Test Engineer </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <br></br>
          <p className="small-resume">
            Experienced information technology professional
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/joeram-chavez/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/chavezengr/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img src={facebook} alt="FaceBook" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img src={viber} alt="Viber" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Joeram} alt="joeram" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
