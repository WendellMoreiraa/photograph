import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  defaultProps: { variant: "primary", size: "md" },
  baseStyle: {
    borderRadius: "4px",
    fontSize: "sm",
    textTransform: "uppercase",
    lineHeight: "20px",
    fontWeight: "medium",
    cursor: "pointer",
    _disabled: {
      cursor: "default",
      opacity: 1,
    },
  },
  sizes: {
    sm: {
      py: 1,
      px: 2,
    },
    md: {
      py: 2,
      px: 3,
    },
    lg: {
      py: 3,
      px: 4,
    },
  },
  variants: {
    primary: {
      bg: "primary.500",
      color: "white",
      _hover: {
        bg: "primary.600",
      },
      _disabled: {
        bg: "violet.200 !important",
      },
    },
  },
});
