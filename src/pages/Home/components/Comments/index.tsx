import { useState } from "react";
import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NatashaSantos from "../../../../lib/assets/nathasaSantos.png";
import ThaisHelena from "../../../../lib/assets/thaisHelena.png";
import BarbaraLima from "../../../../lib/assets/barbaraLima.png";
import Aspas from "../../../../lib/assets/aspas.png";

const comments = [
  {
    name: "Natasha Santos",
    img: NatashaSantos,
    comment:
      "Amei a experiência de comprar com a loja, o atendimento é ótimo e o produto chegou super rápido!",
  },
  {
    name: "Thais Helena",
    img: ThaisHelena,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Barbara Lima",
    img: BarbaraLima,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit LoremLorem ipsum dolor sit amet, consectetur adipiscing elit Lorem",
  },
  {
    name: "Natasha Santos",
    img: NatashaSantos,
    comment:
      "Amei a experiência de comprar com a loja, o atendimento é ótimo e o produto chegou super rápido!",
  },
  {
    name: "Barbara Lima",
    img: BarbaraLima,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit LoremLorem ipsum dolor sit amet, consectetur adipiscing elit Lorem",
  },
  {
    name: "Thais Helena",
    img: ThaisHelena,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Comments = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Flex flexDir="column" alignItems="center" mt="100px" mb="100px">
      <Text>Depoimentos</Text>
      <Heading>O que os clientes dizem?</Heading>
      <Flex alignItems="center" gap="8">
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          mt="16"
          maxW="480px"
          gap="5"
        >
          {comments.map((item, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              borderRadius="md"
              cursor="pointer"
              w="128px"
              textAlign="center"
            >
              <Box
                position="relative"
                w="100px"
                h="100px"
                opacity={index === activeIndex ? "100%" : "40%"}
                _hover={{ opacity: "100%" }}
              >
                <Avatar w="100px" h="100px" src={item.img} />
                {index === activeIndex && (
                  <Flex
                    w="30px"
                    h="30px"
                    bgColor="primary.500"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="full"
                    position="absolute"
                    bottom="0"
                    right="0"
                  >
                    <Image src={Aspas} />
                  </Flex>
                )}
              </Box>
              {index === activeIndex && (
                <Text mt="2" fontWeight="bold">
                  {item.name}
                </Text>
              )}
            </Box>
          ))}
        </Flex>
        <Box
          mt="4"
          p="4"
          borderRadius="md"
          minW="600px"
          maxW="600px"
          textAlign="center"
        >
          <Text mt="2">{comments[activeIndex].comment}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Comments;
