import * as React from 'react'
import ProfileCard from '../components/ProfileCard'
import { CurlyArrowRight } from '../components/svg/CurlyArrowRight'
import { Box, Text, BoxProps } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const MotionBox = motion<BoxProps>(Box)

export const IntroBlock: React.FC = () => {
  const { ref, inView } = useInView()
  const controls = useAnimation()

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Box ref={ref} ali>
      <Box pos="relative">
        <Text fontFamily="Reenie beanie" fontSize="3xl">{`That's me!`}</Text>
        <Box pos="absolute" left="12">
          <CurlyArrowRight />
        </Box>
      </Box>
      <MotionBox
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-end' }}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              duration: 1.5,
              delay: 0.5
            },
          },
          hidden: { opacity: 0, x: 50 },
        }}
      >
        <ProfileCard />
      </MotionBox>
    </Box>
  )
}
