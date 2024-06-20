import { Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      w="full"
      bgColor="primary.500"
      alignItems="center"
      justifyContent="center"
      h="127px"
    >
      <Text fontSize="2xl" color="white">
        A vida passa e a fotografia é a história da sua vida
      </Text>
    </Flex>
  );
};

export default Hero;
