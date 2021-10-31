import React from 'react'
import {
  chakra,
  Box,
  Image,
  Flex,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'

import { MdHeadset, MdEmail, MdLocationOn } from 'react-icons/md'
import { BsFillBriefcaseFill } from 'react-icons/bs'

const ProfileCard = () => {
  return (
    <Box
      w="sm"
      bg={useColorModeValue('white', 'gray.800')}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Image
        w="full"
        h={56}
        fit="cover"
        objectPosition="center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />

      <Flex alignItems="center" px={6} py={3} bg="gray.900">
        <Icon as={MdHeadset} h={6} w={6} color="white" />

        <Text mx={3} color="white" fontWeight="bold" fontSize="lg">
          Coding...
        </Text>
      </Flex>

      <Box py={4} px={6}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'white')}
        >
          Moritz Zier
        </Text>

        <Text py={2} color={useColorModeValue('gray.700', 'gray.400')}>
          {`
          Full Stack Dev & web designer, passionate for clean design.
          `}
        </Text>

        <Flex
          alignItems="center"
          mt={4}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

          <Text px={2} fontSize="sm">
            {`Wiesemann & Theis GmbH`}
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          mt={4}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <Icon as={MdLocationOn} h={6} w={6} mr={2} />

          <Text px={2} fontSize="sm">
            {`Germany`}
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          mt={4}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <Icon as={MdEmail} h={6} w={6} mr={2} />

          <Text px={2} fontSize="sm">
            {`moritz.zier@gmail.com`}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default ProfileCard
