import ContentMain from '../../components/Content'
import Navigation from '../../components/Navigation'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Navigation />

      <ContentMain>
        <h1>conteúdo</h1>
      </ContentMain>
    </Container>
  )
}
