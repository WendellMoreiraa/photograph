import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import AboutImage from "../../../../lib/assets/aboutme.png";

const AboutMe = () => {
  return (
    <Flex marginTop="20px">
      <Flex alignItems="center" justifyContent="center" width="full">
        <Flex
          flexDir="column"
          gap="7"
          px="6"
          py="4"
          borderLeft="5px solid"
          borderColor="primary.500"
        >
          <Heading fontSize="5xl">Quem sou eu?</Heading>
          <Text maxW="500px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
            eros vel neque lobortis, sit amet mattis diam dapibus. Nam congue
            porta elementum. Nam quis malesuada eros, ut fermentum tellus. Sed
            mollis a ex at volutpat. Morbi eleifend odio neque, eget blandit
            tortor feugiat ut. Praesent suscipit sapien ligula, eu hendrerit
            justo placerat et. Sed a dui eget ligula consequat convallis. Aenean
            sodales neque sed orci bibendum consequat. Vestibulum auctor diam
          </Text>
        </Flex>
      </Flex>
      <Flex width="full" maxW="600px">
        <Image src={AboutImage} w="full" />
      </Flex>
    </Flex>
  );
};

export default AboutMe;
