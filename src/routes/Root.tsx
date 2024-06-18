import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../lib/components/Header";

export default function Root() {
  return (
    <Flex flexDir="column">
      <Header />
      <Outlet />
    </Flex>
  );
}
