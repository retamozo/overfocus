import { createMuiTheme, Theme } from "@material-ui/core/styles";
import "typeface-roboto";

const $primaryColor = "#1acae3";
const $secondaryColor = "#264d79";
const $gary = "#bcbcbc";
const $lightGary = "#d9d9d9";
const $red = "#ff0000";

export const color = {
  bahamaBlue: "#264D79",
  black: "#000000",
  blueGray: "#96A7B8",
  blueStone: "#173E64",
  cyprusGreen: "#113259",
  fernGreen: "#63AB75",
  gray: "#7f7f7f",
  hawkeBlue: "#E2EAF2",
  heatherGray: "#A8B6C6",
  kleinBlue: "#002EA7",
  lightBlue: "#004CEF",
  regalBlue: "#17375B",
  rockBlue: "#90A7BF",
  solitude: "#fbfbfc",
  solitudeWhite: "#E9EDF2",
  updateGreen: "#4caf50",
  white: "#FFFFFF",
};

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: $primaryColor,
    },
    secondary: {
      main: $secondaryColor,
    },
  },
  shape: {
    borderRadius: 5,
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: "0 4px 8px 0 rgba(157,157,157,.26)",
      },
    },
    MuiExpansionPanel: {
      root: {
        boxShadow: "0 0 0 1px #dee7f0, 0 4px 8px 0 rgba(157,157,157,.26)",
        "&:before": {
          backgroundColor: "#dee7f0",
        },
        "&:first-child": {
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        },
        "&:last-child": {
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: $gary,
      },
      shrink: {
        color: `${$secondaryColor} !important`,
        letterSpacing: 2,
        textTransform: "uppercase",
      },
    },
    MuiInput: {
      underline: {
        "&:hover:not($disabled):before": {
          borderBottom: `2px solid ${$gary} !important`,
        },
        "&:before": {
          borderBottom: `1px solid ${$lightGary}`,
        },
        "&:after": {
          borderBottom: `unset`,
        },
        "&.Mui-error:hover:not($disabled):before": {
          borderBottom: `2px solid ${$red} !important`,
        },
        "&.Mui-error:before": {
          borderBottom: `1px solid ${$red}`,
        },
      },
    },

    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "unset",
        },
      },
    },
  },
});

export default theme;
