import { Flex } from "@chakra-ui/react";
import Carrosel from "./components/Carrosel";
import AboutMe from "./components/AboutMe";
import bgHome from "../../lib/assets/bgHome.png";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <Flex
      flexDir="column"
      h="full"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bgHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "20%",
        zIndex: -1,
      }}
    >
      <Carrosel />
      <AboutMe />
      <Hero />
    </Flex>
  );
};

export default Home;
