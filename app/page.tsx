import type { Metadata } from 'next'
import {
  Container,
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  List,
} from '@chakra-ui/react'
import Navbar from './../components/Navbar'

export const metadata: Metadata = {
  title: 'Moritz Zier',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <Container>
        <Box id="home">
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
          <List.Root>
            <ListItem>
              <Link href="mailto:moritz.zier@gmail.com">Email</Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/moritzzier">Github</Link>
            </ListItem>
          </List.Root>
        </Box>
      </Container>
    </>
  )
}
