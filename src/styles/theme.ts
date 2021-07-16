import { ThemeConfiguration } from "../types/theme";

export const Global: ThemeConfiguration = {
  colors: {
    background: {
      primary: "#141414",
    },
    text: {
      primary: "#FFFAFF",
      information: "#3E92CC",
      warning: "#F5853F",
      error: "#7A0E00",
      success: "rgb(16, 204, 82)",
    },
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
  fonts: {
    fontFamily: "Fira Sans",
    heading: {
      fontFamily: "Zen Loop",
    },
    navigationItem: {
      fontFamily: "Fira Sans",
    },
  },
};
