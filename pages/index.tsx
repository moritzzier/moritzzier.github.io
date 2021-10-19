import Head from 'next/head'
import {
  Container,
  Box,
  Heading,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

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
      <Container>
        <Box id="home">
          <Heading size="h1">
            Hi,
            <br />
            I'm Moritz!
          </Heading>
          <p className="text-2xl text-typo-light font-body">
            Fullstack Webdeveloper
          </p>
          <span className="text-typo-dark mt-16 flex justify-center animate-bounce"></span>
        </Box>
        <Box id="about">
          <Heading size="h2">About</Heading>
          <p className=" text-typo-light font-body text-justify">
            I'm a software/webdeveloper from Germany.
            <br />I have a passion for fast and efficent development and clean
            code. During my years of fullstack-development I learned the
            importance of good design to meet and quickly adjust to the needs of
            my clients.
          </p>
        </Box>
        <Box id="projects">
          <Heading size="h2">Projects</Heading>
          <p className="lg:pt-4 text-typo-light font-body text-justify">
            A nice view is in development. In the meantime checkout my{' '}
            <a href="https://github.com/moritzzier" className="underline">
              Github!
            </a>
          </p>
        </Box>
        <Box id="contact">
          <Heading size="h2">Contact</Heading>
          <p className="lg:pt-4 text-typo-light font-body ">How to reach me:</p>
          <UnorderedList>
            <ListItem>
              <Link href="mailto:moritz.zier@gmail.com" className="underline">
                Email
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/moritzzier" className="underline">
                Github
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Container>
    </>
  )
}
