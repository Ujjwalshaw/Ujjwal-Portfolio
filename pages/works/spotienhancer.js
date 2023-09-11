import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sporti Enhancer">
    <Container>
      <Title>
      Sporti Enhancer<Badge>2022</Badge>
      </Title>
      • Created a WebApp using flask which analyses a user’s sportify music data and displays their top tracks, top artists, the
listening habits, popularity of their songs/artists, their top genres and basic score.
      <br></br>
      • You can share your class-link and start your class at a go.
      <br></br>
      • Features: Caption generator using NLP, a dedicated whiteboard, file-sharing, video-call, real-time chat, screen-sharing etc.
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Ujjwalshaw/Spoti-Enhancer">
          Sporti-Enhancer<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript, Flask</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/spotienhancer1.png" alt="spotienhancer" />
      <WorkImage src="/images/works/spotienhancer2.png" alt="spotienhancer" />
      <WorkImage src="/images/works/spotienhancer3.png" alt="spotienhancer" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
