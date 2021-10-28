import * as React from 'react'
import ProfileCard from '../components/ProfileCard'
import { CurlyArrowRight } from '../components/svg/CurlyArrowRight'
import { Box, Text } from '@chakra-ui/react'
import { AnimationWrapper } from '../components/AnimationWrapper'

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.5,
      delay: 0.25,
    },
  },
  hidden: { opacity: 0, x: 50 },
}

export const IntroBlock: React.FC = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box pos="relative">
        <Text fontFamily="Reenie beanie" fontSize="3xl">{`That's me!`}</Text>
        <Box pos="absolute" left="12">
          <CurlyArrowRight />
        </Box>
      </Box>
      <Box display="flex" justifyContent={{ base: 'center', md: 'flex-end' }}>
        <AnimationWrapper variants={variants}>
          <ProfileCard />
        </AnimationWrapper>
      </Box>
    </Box>
  )
}
