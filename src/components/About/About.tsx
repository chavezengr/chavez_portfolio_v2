import { Container } from './styles'
import VinayakSingh from '../../assets/fuji_j01.jpg'
import aspnetcore from '../../assets/NET_Core_Logo.svg'
import github from '../../assets/github.svg'
import gitlab from '../../assets/gitlab.svg'
import htmlIcon from '../../assets/html-icon.svg'
import cssIcon from '../../assets/css-icon.svg'
import csharp from '../../assets/Logo_C_sharp.svg'
import java from '../../assets/java-icon.svg'
import jsIcon from '../../assets/js-icon.svg'
import reactIcon from '../../assets/react-icon.svg'
import typescriptIcon from '../../assets/typescript-icon.svg'
import postgresql from '../../assets/postgresql-icon.svg'
import selenium from '../../assets/selenium-svgrepo-com.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import Hello from '../../assets/Hello.gif'

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi <img className="jlogo" src={Hello} alt="Hello" width="20px" />,
            I'm Joeram Chavez, a Software Engineer with accumulated seven years
            of experience in software information technology and service
            industry, with a specialization in Software Development.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: '2rem', marginBottom: '2rem' }}
        >
          <p>
            I possess adaptability to new trends and technologies within
            projects. As a proficient problem solver, I excel in communication
            with both technical and functional teams. Moreover, I have
            substantial experience in implementing automated testing.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            If you require a new software applications or wish to enhance your
            current online presence, I am eager to discuss how I can assist you.
            Let's collaborate to turn your software aspirations into reality!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={aspnetcore} alt="AspNetCore" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={github} alt="GitHub" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={gitlab} alt="GitLab" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={csharp} alt="CSharp" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={java} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={postgresql} alt="PostgreSQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={selenium} alt="Selenium" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={VinayakSingh} alt="Joeram Chavez" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
