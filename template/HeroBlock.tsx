import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'

import Hero from '../components/Hero'
import { AnimationWrapper } from '../components/AnimationWrapper'
import { ArrowUp } from '../components/svg/ArrowUp'

const heroVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.5,
    },
  },
  hidden: { opacity: 0, y: 50 },
}

const arrowVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.5,
      delay: 1.5,
    },
  },
  hidden: { opacity: 0, y: 50 },
}

export const HeroBlock: React.FC<IHeroBlockProps> = (
  props: IHeroBlockProps
) => {
  return (
    <Box sx={{ height: '100vh'}}>
      <Box>
        <AnimationWrapper variants={heroVariants}>
          <Hero />
        </AnimationWrapper>
      </Box>
      <Box display="flex" justifyContent="center">
        <AnimationWrapper variants={arrowVariants}>
          <Text fontFamily="Reenie beanie" fontSize="3xl">
            Scroll down
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ transform: 'rotate(180deg)' }}
          >
            <ArrowUp />
          </Box>
        </AnimationWrapper>
      </Box>
    </Box>
  )
}

export interface IHeroBlockProps {}
