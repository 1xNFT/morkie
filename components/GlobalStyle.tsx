import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1a1a1a",
      },
    },
  },
  fonts: {
    body: "Roboto, sans-serif", // Use the imported font
    heading: "Roboto, sans-serif", // Use the imported font for headings as well
  },
  components: {
    Button: {
      baseStyle: {
        bg: "#00b8d9",
        color: "#fff",
        borderColor: "#00b8d9",
      },
    },
  },
});

export default customTheme;

