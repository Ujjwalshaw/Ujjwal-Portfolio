import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const HeroImage = dynamic(() => (
  import('next/image').then((mod) => mod.default)
), {
  ssr: false,
  loading: () => <VoxelDogLoader />, // You can replace this with your custom loading component.
});

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content=" Ujjwal Shaw's homepage" />
        <meta name="author" content=" Ujjwal Shaw" />
        <meta name="author" content=" Ujjwal Shaw" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Ujjwal Shaw - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px', // Adjust this value for your desired top margin
      }}
    >
      <HeroImage
        src="/Hero.png" // Specify the path to your PNG image here
        alt="Hero Image"
        width={360} // Specify the width of the image
        height={200} // Specify the height of the image
      />
    </div>
        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
