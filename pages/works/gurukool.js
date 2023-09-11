import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Sporti Enhancer">
    <Container>
      <Title>
      Gurukool<Badge>2022</Badge>
      </Title>
      • It is an online classroom webapp with real time teacher-student interaction.
      <br></br>
      • You can share your class-link and start your class at a go.
      <br></br>
      • Features: Caption generator using NLP, a dedicated whiteboard, file-sharing, video-call, real-time chat, screen-sharing etc.
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Ujjwalshaw/GuruKool">
          Gurukool<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript, NodeJS, PeerJs, Docker</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/gurukool1.png" alt="gurukool" />
      <WorkImage src="/images/works/gurukool2.png" alt="gurukool" />
      <WorkImage src="/images/works/gurukool3.png" alt="gurukool" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
