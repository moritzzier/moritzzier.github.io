import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign="center"
      >
        <Heading
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="extrabold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
          Hi, <br/>
          i'm {" "}
          <Text
            display="inline"
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Moritz
          </Text>{" "}
        </Heading>
      </Box>
    </Box>
  );
};

export default Hero;