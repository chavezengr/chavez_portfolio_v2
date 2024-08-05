import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import aspnet from '../../assets/NET_Core_Logo.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://joeramchavez.in" className="logo">
        <span>www.joeram</span>
        <span>chavez.in</span>
      </a>
      <div>
        <p>
          I <span> ❤️</span>
          <img src={reactIcon} alt="React" />
          <img src={aspnet} alt="ASP.NET" />
        </p>
      </div>
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
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
