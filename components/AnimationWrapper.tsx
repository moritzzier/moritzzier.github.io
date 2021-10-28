import { Box, BoxProps } from '@chakra-ui/layout'
import { motion, useAnimation, Variants } from 'framer-motion'
import * as React from 'react'
import { useInView } from 'react-intersection-observer'

const MotionBox = motion<BoxProps>(Box)



export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  variants,
  children,
}) => {
  const { ref, inView } = useInView()
  const controls = useAnimation()

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </MotionBox>
  )
}

type AnimationWrapperProps = {
  variants: Variants;
}