import Head from 'next/head'
import {
  Container,
  Box,
  Heading,
  Link,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react'
import Navbar from './../components/Navbar'
import Hero from '../components/Hero'
import ProfileCard from '../components/ProfileCard'
import { CurlyArrowRight } from '../components/svg/CurlyArrowRight'
import { IntroBlock } from '../template/IntroBlock'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Moritz Zier</title>
        <meta name="description" content="My Webdev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Noto+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Container>
        <Hero />
        <IntroBlock />
        {/* <Box id="home">
          <Heading size="2xl">Hi, I'm Moritz!</Heading>
          <Text>Welcome to my webdev portfolio.</Text>
        </Box>
        <Box id="about">
          <Heading size="lg">About</Heading>
          <Text>
            I'm a software/webdeveloper from Germany.
            <br />I have a passion for fast and efficent development and clean
            code. During my years of fullstack-development I learned the
            importance of good design to meet and quickly adjust to the needs of
            my clients.
          </Text>
        </Box>
        <Box id="projects">
          <Heading size="lg">Projects</Heading>
          <Text>
            A nice view is in development. In the meantime checkout my{' '}
            <Link href="https://github.com/moritzzier">Github!</Link>
          </Text>
        </Box>
        <Box id="contact">
          <Heading size="lg">Contact</Heading>
          <Text>How to reach me:</Text>
          <UnorderedList>
            <ListItem>
              <Link href="mailto:moritz.zier@gmail.com">Email</Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/moritzzier">Github</Link>
            </ListItem>
          </UnorderedList>
        </Box> */}
      </Container>
    </>
  )
}
