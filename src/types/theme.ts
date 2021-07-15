export type ThemeColors = {
  background: {
    primary: string;
    secondary?: string;
    ternary?: string;
  };
  text: {
    primary: string;
    secondary?: string;
    ternary?: string;

    information: string;
    warning: string;
    error: string;
    success: string;
  };
};

export type ThemeBreakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type ThemeFonts = {
  fontFamily: string;
  heading?: ThemeFonts;
  navigationItem?: ThemeFonts;
};

export type ThemeConfiguration = {
  colors: ThemeColors;
  breakpoints: ThemeBreakpoints;
  fonts: ThemeFonts;
};
