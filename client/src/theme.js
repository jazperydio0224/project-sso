import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ce93d8",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "serif"].join(","),
  },
});

theme.typography.h1 = {
  fontSize: "32px",
  fontWeight: 600,
  lineHeight: 1.15,
  "@media (min-width:640px)": {
    fontSize: "36px",
  },
  "@media (min-width:1280px)": {
    fontSize: "52px",
  },
  "@media (min-width:1536px)": {
    fontSize: "64px",
  },
};

theme.typography.h2 = {
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: 1.2,
  "@media (min-width:640px)": {
    fontSize: "30px",
  },
  "@media (min-width:1280px)": {
    fontSize: "36px",
  },
  "@media (min-width:1536px)": {
    fontSize: "48px",
  },
};

theme.typography.h3 = {
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: 1.3,
  "@media (min-width:640px)": {
    fontSize: "24px",
  },
  "@media (min-width:1280px)": {
    fontSize: "30px",
  },
  "@media (min-width:1536px)": {
    fontSize: "36px",
  },
};

theme.typography.h4 = {
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: 1.5,
  "@media (min-width:640px)": {
    fontSize: "20px",
  },
  "@media (min-width:1280px)": {
    fontSize: "24px",
  },
  "@media (min-width:1536px)": {
    fontSize: "30px",
  },
};

theme.typography.h5 = {
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: 1.5,
  "@media (min-width:640px)": {
    fontSize: "18px",
  },
  "@media (min-width:1280px)": {
    fontSize: "20px",
  },
  "@media (min-width:1536px)": {
    fontSize: "24px",
  },
};

theme.typography.h6 = {
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: 1.5,
  "@media (min-width:640px)": {
    fontSize: "16px",
  },
  "@media (min-width:1280px)": {
    fontSize: "18px",
  },
  "@media (min-width:1536px)": {
    fontSize: "20px",
  },
};

theme.typography.subtitle1 = {
  fontSize: "15px",
  "@media (min-width:640px)": {
    fontSize: "16px",
  },
  "@media (min-width:1280px)": {
    fontSize: "17px",
  },
  "@media (min-width:1536px)": {
    fontSize: "18px",
  },
};

theme.typography.subtitle2 = {
  fontSize: "13px",
  "@media (min-width:640px)": {
    fontSize: "14px",
  },
  "@media (min-width:1280px)": {
    fontSize: "15px",
  },
  "@media (min-width:1536px)": {
    fontSize: "16px",
  },
};

theme.typography.body1 = {
  fontSize: "15px",
  "@media (min-width:640px)": {
    fontSize: "16px",
  },
  "@media (min-width:1280px)": {
    fontSize: "17px",
  },
  "@media (min-width:1536px)": {
    fontSize: "18px",
  },
};

theme.typography.body2 = {
  fontSize: "14px",
  "@media (min-width:640px)": {
    fontSize: "15px",
  },
  "@media (min-width:1280px)": {
    fontSize: "16px",
  },
  "@media (min-width:1536px)": {
    fontSize: "17px",
  },
};

export default theme;
