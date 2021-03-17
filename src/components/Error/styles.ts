import { createStyles, Theme } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: "60px 40px",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
      minHeight: "auto !important",
    },
    verticalBorder: {
      [theme.breakpoints.up("sm")]: {
        borderRight: "solid 1.3px rgba(161, 209, 214, .2)",
        maxWidth: 1.3,
        minWidth: 1.3,
        marginRight: 40,
        height: "100%",
      },
    },
    divider: {
      width: 60,
      border: "solid 2px #1acae3",
      margin: "auto",
    },
    title: {
      paddingBottom: 20,
      fontWeight: 300,
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        left: 0,
        [theme.breakpoints.down("xs")]: {
          left: "calc(50% - 25px)",
        },
        bottom: 0,
        width: 50,
        height: 4,
        backgroundColor: "#00c3e1",
      },
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "bold",
      lineHeight: 1.4,
      letterSpacing: 0.2,
      color: "#173e64",
      marginTop: 20,
      marginBottom: 20,
    },
    content: {
      color: "#565656",
      [theme.breakpoints.up("sm")]: {
        paddingRight: 40,
      },
    },
    link: {
      color: `${theme.palette.primary.main} !important`,
    },
    contact: {
      color: "#565656",
      marginTop: 120,
      "&>div": {
        marginBottom: 10,
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: 20,
      },
    },
    icon: {
      marginRight: "0.4rem",
      color: `${theme.palette.primary.main} !important`,
      verticalAlign: "middle",
      width: 25,
      display: "inline-block",
      textAlign: "center",
    },
    mail: {
      color: `${theme.palette.secondary.main} !important`,
    },
  });

export default styles;
