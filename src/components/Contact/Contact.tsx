import { Container } from './styles'
import emailIcon from '../../assets/email-icon.svg'
import phoneIcon from '../../assets/phone-icon.svg'
import { Form } from '../Form/Form'

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>

        <p>Please contact me using my contacts below</p>
      </header>
      <div className="contacts">
        <div>
          <a href="joeram.chavez07@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="joeram.chavez07@gmail.com">joeram.chavez07@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919630576848">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+639454380409">(+63) 9454380409</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}
