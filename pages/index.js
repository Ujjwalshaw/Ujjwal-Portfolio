import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import ExpParagraph from '../components/exppara'
import { BioSection, BioYear } from '../components/bio'
import { ExpSection, ExpCompany, ExpYear, ExpTitle } from '../components/experience'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Data Science senior at IIT MANDI!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ujjwal Shaw
          </Heading>
          <p>4th year B.Tech. DSE undergrad (Full Stack Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        I am a Data Science and Engineering student at IIT Mandi with a passion for problem-solving, web development, and machine learning. Proficient in languages like C++, Python, and web technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB, I have a diverse skill set. During my internship, I worked with Transformers, LLMs, Physics-informed Neural Networks, and Generative AI, expanding my knowledge and expertise. 
        Off the screen, you'll often find me on the football field, where I enjoy the thrill of teamwork and competition.
          <br></br>
          When I'm not coding, you'll find me watching movies, hanging out with my friends and exploring the beauty of 🏞 Himachal.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Lucknow, India.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started B.tech. in Data Science at IIT, Mandi, HP
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Member of Publicity Team, Xpecto (Technical Fest, IIT Mandi)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started Working as Core Member at PMC, IIT Mandi
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <ExpSection>
        <ExpCompany>Siemens India</ExpCompany>
        <ExpTitle>Data Science Intern</ExpTitle>
        <ExpYear>January 2023 - July 2023</ExpYear>
        </ExpSection>
        <ExpParagraph>
        • Developed an industrial chatbot on the RASA framework, providing real-time insights to plant operators and offering preventive and corrective actions for monitored plant anomalies.
        <br></br>
        • Identified and reported anomalies in plant operations, creating domain-specific knowledge layers through custom prompts and open-source LLMs, subsequently stored in ElasticSearch and InfluxDB.
        <br></br>
        • Enhanced the custom auto-encoder model by integrating physics-driven loss function, achieving 65% reduction in inconsistent predictions related to cement kiln operations.

        </ExpParagraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥ 
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: "pink" }}>Music</text>,{' '}
          Movies
          , <text style={{ color: "pink" }}>Treking</text>,{' '}Photography, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Achievements
        </Heading>
        <ExpParagraph>
        • Ranked 2nd in FrostHack-2022, a national level hackathon organised by IIT Mandi.
        <br></br>
        • Represented IIT Mandi in Inter IIT Tech Meet 11.0 in CloudPhysician - The Vital Extraction Challenge event.
        <br></br>
        • Ranked 2nd in AI in Healthcare - Pneumonia Classification hackathon organised by IIT Mandi.

        </ExpParagraph>
        {/* <li><section>Ranked 2nd in FrostHack-2022, a national level hackathon organised by IIT Mandi.</section></li>
        <li><section>Represented IIT Mandi in Inter IIT Tech Meet 11.0 in CloudPhysician - The Vital Extraction Challenge event.</section></li>
        <li><section>Ranked 2nd in AI in Healthcare - Pneumonia Classification hackathon organised by IIT Mandi.</section></li> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Ujjwalshaw" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Ujjwal Shaw
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/ujjwal-shaw/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Ujjwal Shaw
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/ujjwalshaw_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ujjwalsahw_
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1G7vCSEPhQvOQt7SSoHvK_Mye0y2I5605/view?usp=sharing" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://drive.google.com/file/d/1G7vCSEPhQvOQt7SSoHvK_Mye0y2I5605/view?usp=sharing">Download Resume</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
