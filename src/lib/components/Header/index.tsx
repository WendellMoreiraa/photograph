import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Portifolio",
      href: "/portifolio",
    },
  ];
  return (
    <Flex
      w="full"
      h="5.25rem"
      bgColor="primary.100"
      alignItems="center"
      justifyContent="space-between"
      p="6"
    >
      <Image src={Logo} />
      <Flex alignItems="center" gap="10">
        <Flex alignItems="center" gap="8">
          {links.map((link) => (
            <Text
              cursor="pointer"
              color="gray.400"
              _hover={{
                color: "primary.500",
                fontWeight: "bold",
              }}
            >
              {link.label}
            </Text>
          ))}
        </Flex>
        <Button>orçamento</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
