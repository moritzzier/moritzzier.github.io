import React from 'react'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Container,
} from '@chakra-ui/react'
import { MdMenu } from "react-icons/md";


export default function Gslr() {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Container maxW={'container.lg'}>
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Portfolio"
                display="flex"
                alignItems="center"
              >
                <VisuallyHidden>Moritz Zier</VisuallyHidden>
              </chakra.a>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Moritz Zier
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: 'none', md: 'inline-flex' }}
              >
                <Button variant="ghost">Projects</Button>
                <Button variant="ghost">Blog</Button>
              </HStack>
              <Box display={{ base: 'inline-flex', md: 'none' }}>
                <IconButton
                  display={{ base: 'flex', md: 'none' }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue('gray.800', 'inherit')}
                  variant="ghost"
                  icon={<MdMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? 'flex' : 'none'}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                  <Button w="full" variant="ghost">
                    Projects
                  </Button>
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </Container>
      </chakra.header>
    </React.Fragment>
  )
}
