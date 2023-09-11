import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbfinancefusion from '../public/images/works/financefusion-home.png'
import thumbgurukool from '../public/images/works/gurukool-home.png'
import thumbspotienhancer from '../public/images/works/spotienhancer-home.png'
import thumbHandGesture from '../public/images/works/handgesture-home.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="financefusion" title="Finance Fusion" thumbnail={thumbfinancefusion}>
            A MERN Stack webapp, for tracking small business and predicting sales.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="gurukool"
            title="Gurukool"
            thumbnail={thumbgurukool}
          >
            A node app, for online classroom with extensive features.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="spotienhancer"
            title="Spoti Enhancer"
            thumbnail={thumbspotienhancer}
          >
            A flask webapp, for enhancing user experience on Spotify.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="handgesture" thumbnail={thumbHandGesture} title="Hand Gesture Recognition">
          A machine learning Model that will Recognize Hand Gestures in real time.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
