import { Container } from './styles'
import { Home } from '../Home/Home'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Project } from '../Project/Project'

export function Main() {
  return (
    <Container>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  )
}
