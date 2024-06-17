import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Flex flexDir="column">
      <Outlet />
    </Flex>
  );
}
